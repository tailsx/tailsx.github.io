import { NextResponse } from "next/server"
import { importGameData, importGamesList } from "../../utils/mahjong"

// Assumes list of sheets exist
export async function GET(req) {
  //const data = await importGamesList()
  const data2 = await importGameData("7-2-21")
  return NextResponse.json(data2)
}
