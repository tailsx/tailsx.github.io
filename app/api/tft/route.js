import { NextResponse } from "next/server"

import { createClient } from "redis"

const redisClient = createClient({
  password: process.env.REDIS_PASS,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
})

export async function GET() {
  redisClient.connect()
  const data = await redisClient.json.get("tft-13.16")
  const other = await redisClient.hGetAll("descToEffect")
  redisClient.disconnect()

  const result = data.items.map((i) => {
    if (!i?.desc) return null

    return i.desc.replace(/@[A-Za-z0-9]+@/g, (match, key) => {
      const stripped = match.replaceAll("@", "")

      return `^${i.effects?.[stripped]}^` || "MISSING"
    })
  })

  return NextResponse.json({ result })
}
