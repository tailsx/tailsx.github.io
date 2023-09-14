import { NextResponse } from "next/server"
import { importGameData, importGamesList, processGameData, processGameList } from "../../utils/mahjong"
import { hSet, setJSON } from "../../utils/redis"

// Assumes list of sheets exist
export async function GET(req) {
  const resGamesList = await importGamesList()
  if (resGamesList?.data?.sheets?.length === 0) {
    return NextResponse.json({ error: "No data found" })
  }
  const json = await processGameList(resGamesList)
  const resDB = await setJSON("mahjong", json)

  for (let i = 0; i < json.titles.length; i++) {
    const title = json.titles[i]

    const resGameData = await importGameData(title)
    const resSet = await hSet("mahjongGameData", decodeURI(title), JSON.stringify(await processGameData(resGameData)))
  }

  return NextResponse.json("OK")
}
