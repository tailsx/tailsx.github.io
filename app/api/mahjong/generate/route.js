//import { GoogleAuth } from "google-auth-library"
import { NextResponse } from "next/server"
import { getAuthSheets, googleSheets } from "../../utils/google"
import { get, getJSON, set, setJSON } from "../../utils/redis"
import { isKeyStale } from "../../utils/server"
import { importGamesList, processGameList } from "../../utils/mahjong"

const DELAY_UNIX_MS = 1000 * 60 * 60 * 24 * 7 // 7 days

export async function GET(req) {
  try {
    const resCheck = await getJSON("mahjong")
    if (resCheck.lastUpdated && !isKeyStale(resCheck.lastUpdated)) {
      return NextResponse.json(resCheck)
    }

    const data = await importGamesList()

    if (data?.data?.sheets?.length === 0) {
      return NextResponse.json({ error: "No data found" })
    }

    const json = await processGameList(data)
    const resDB = await setJSON("mahjong", json)
    if (resDB === "OK") {
      return NextResponse.json(json)
    }
    throw new Error("Error for redis")
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }
}
