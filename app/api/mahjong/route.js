//import { GoogleAuth } from "google-auth-library"
import { NextResponse } from "next/server"
import { getAuthSheets, googleSheets } from "../utils/google"
import { get, getJSON, set, setJSON } from "../utils/redis"

const DELAY_UNIX_MS = 1000 * 60 * 60 * 24 * 7 // 7 days

export async function GET(req) {
  if (req.method !== "GET") {
    return
  }

  try {
    const resCheck = await getJSON("mahjong")
    if (resCheck.lastUpdated && resCheck.lastUpdated + DELAY_UNIX_MS < Date.now()) {
      return NextResponse.json(resCheck)
    }

    const auth = await getAuthSheets()
    const sheets = googleSheets(auth)

    const data = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
    })

    if (data?.data?.sheets?.length === 0) {
      return NextResponse.json({ error: "No data found" })
    }

    const json = await processData(data)
    const resDB = await setJSON("mahjong", json)
    if (resDB === "OK") {
      return NextResponse.json(json)
    }
    throw new Error("Error for redis")

    /*    
// redis
const data = await setJSON("mahjong", { test: "test" })
    console.log(data)
    if (data === "OK") {
      return NextResponse.json(data)
    }
    throw new Error("No data found") 
    
    */
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }
}

async function processData(rawData) {
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
