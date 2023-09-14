import { hGet, hSet } from "@/app/api/utils/redis"
import { getAuthSheets, googleSheets } from "./google"

export async function fetchGameData(gameId) {
  const resDB = await hGet("mahjongGameData", gameId)
  const gameData = JSON.parse(resDB)

  return gameData
}

export async function importGamesList() {
  const auth = await getAuthSheets()
  const sheets = googleSheets(auth)

  const data = await sheets.spreadsheets.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
  })

  return data
}

export async function importGameData(gameId) {
  const auth = await getAuthSheets()
  const sheets = googleSheets(auth)

  const sheetName = gameId.replace(/-/g, "/")
  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `${sheetName}!A:E`,
  })

  return data
}

export function gameSanityCheck(gameRows) {
  for (let i = 0; i < gameRows.length; i++) {
    if (gameRows[i].length < 4) {
      return false
    }
  }

  return true
}

/**
 *
 * @param {*} rawData - Raw data from Google Sheets API
 * @returns
 */
export async function processGameList(rawData) {
  const allSheets = rawData?.data?.sheets

  const titles = []
  const EXCLUDE_SHEETS = ["Lifetime Totals", "Records", "Side bets", "Template"]

  for (let sheet of allSheets) {
    if (EXCLUDE_SHEETS.includes(sheet.properties.title)) continue
    titles.push(sheet.properties.title)
  }

  return {
    length: allSheets.length,
    titles,
    lastUpdated: Date.now(),
  }
}

/**
 *
 * @param {*} rawGameData - Raw data from Individual Game of Google Sheet
 */
export async function processGameData(rawGameData) {
  return {
    players: rawGameData.data.values[0],
    expectedTotals: rawGameData.data.values[1].map((score) => parseInt(score)),
    rounds: rawGameData.data.values.slice(2).map((round) =>
      round.map((score) => {
        if (score === "") return 0
        return parseInt(score)
      })
    ),
    isVerified: false,
  }
}
