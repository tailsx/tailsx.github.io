//import { GoogleAuth } from "google-auth-library"
import { NextResponse } from "next/server"
import { getAuthSheets, googleSheets } from "../../utils/google"
import { get, getJSON, set, setJSON } from "../../utils/redis"
import { isKeyStale } from "../../utils/server"
import { importGamesList, processGameList } from "../../utils/mahjong"

const DELAY_UNIX_MS = 1000 * 60 * 60 * 24 * 7 // 7 days

export async function GET(req) {
  return NextResponse.json(await importGamesList())
}
