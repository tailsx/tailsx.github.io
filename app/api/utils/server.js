const DELAY_UNIX_MS = 1000 * 60 * 60 * 24 * 7 // 7 days

export async function isKeyStale(unixTime) {
  return unixTime + DELAY_UNIX_MS - Date.now() < 0
}
