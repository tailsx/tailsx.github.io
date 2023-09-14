import { NextResponse } from "next/server"
import { getAuthSheets, googleSheets } from "@/app/api/utils/google"

export async function GET(req, params) {
  try {
    const gameData = fetchGameData(params?.params?.game)
    if (resDB) {
      return NextResponse.json(gameData)
    }
    throw new Error("No data found")
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }
}

export async function POST(req, params) {
  const auth = await getAuthSheets()
  const sheets = googleSheets(auth)

  if (params?.params?.game) {
    const sheetName = params.params.game.replace(/-/g, "/")
    const data = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${sheetName}!A:E`,
    })
    const resSet = await hSet(
      "mahjongGameData",
      params?.params?.game,
      JSON.stringify({
        players: data.data.values[0],
        expectedTotals: data.data.values[1].map((score) => parseInt(score)),
        rounds: data.data.values.slice(2).map((round) =>
          round.map((score) => {
            if (score === "") return 0
            return parseInt(score)
          })
        ),
      })
    )
    return NextResponse.json(resSet)
  }

  return NextResponse.json({ error: "No data found" })
}
