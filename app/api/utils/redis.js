import { createClient } from "redis"

const client = createClient({
  password: process.env.REDIS_PASS,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
})

export async function ping() {
  return await client.ping()
}

export async function disconnect() {
  return await client.disconnect()
}

export async function connect() {
  return await client.connect()
}

export async function get(key) {
  if (!client.connected) {
    await client.connect()
  }
  const data = await client.get(key)
  await client.disconnect()
  return data
}

export async function hGet(key, field) {
  if (!client.connected) {
    await client.connect()
  }
  const data = await client.hGet(key, field)
  await client.disconnect()
  return data
}

export async function set(key, value) {
  if (!client.connected) {
    await client.connect()
  }
  const data = await client.set(key, value)
  await client.disconnect()
  return data
}

export async function hSet(key, field, value) {
  if (!client.connected) {
    await client.connect()
  }
  const data = await client.hSet(key, field, value)
  await client.disconnect()
  return data
}

export async function getJSON(key) {
  if (!client.connected) {
    await client.connect()
  }
  const data = await client.json.get(key)
  await client.disconnect()
  return data
}

export async function setJSON(key, obj) {
  if (!client.connected) {
    await client.connect()
  }
  const data = await client.json.set(key, "$", obj)
  await client.disconnect()
  return data
}
