import { google } from "googleapis"

export async function getAuthSheets() {
  const googleAuth = new google.auth.GoogleAuth({
    keyFile: "./secrets.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  })

  const authClient = await googleAuth.getClient()

  return authClient
}

/**
 * Wrapper for Google Sheets
 * @param {*} auth
 * @returns
 */
export function googleSheets(auth) {
  return google.sheets({ version: "v4", auth })
}
