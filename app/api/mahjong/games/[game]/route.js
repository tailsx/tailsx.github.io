import { NextResponse } from "next/server"
import { getAuthSheets, googleSheets } from "@/app/api/utils/google"
import { fetchGameData, importGameData, processGameData } from "@/app/api/utils/mahjong"
import { hSet } from "@/app/api/utils/redis"

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
  if (params?.params?.game) {
    const data = await importGameData(decodeURI(params?.params?.game))
    const resSet = await hSet("mahjongGameData", params?.params?.game, JSON.stringify(await processGameData(data)))

    return NextResponse.json(resSet)
  }

  return NextResponse.json({ error: "No data found" })
}
