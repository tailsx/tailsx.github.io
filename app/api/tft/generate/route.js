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

  let mappings = {}

  for (let entry of data.items) {
    const { effects, desc } = entry

    if (desc) {
      const variables = typeof desc === "string" ? desc.match(/@[A-Za-z0-9]+@/g) || [] : []
      for (let v of variables) {
        if (mappings[v]) {
          mappings[v] = mappings[v].filter((f) => Object.keys(effects).includes(f))
        } else {
          mappings[v] = Object.keys(effects)
        }
      }
    }
  }

  for (const [key, value] of Object.entries(mappings)) {
    await redisClient.hSet("descToEffect", key.replaceAll("@", ""), value?.[0] ? value[0] : "")
  }

  redisClient.disconnect()
  return NextResponse.json({ mappings })
}
