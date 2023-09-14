import { hGet, hSet } from "@/app/api/utils/redis"

export async function fetchGameData(gameId) {
  const resDB = await hGet("mahjongGameData", gameId)
  const gameData = JSON.parse(resDB)

  return gameData
}

export function gameSanityCheck(gameRows) {
  for (let i = 0; i < gameRows.length; i++) {
    if (gameRows[i].length < 4) {
      return false
    }
  }

  return true
}

export function organizeData(rowData) {
  const scores = rowData[0].map(() => {
    return {
      totals: 0,
      history: [],
    }
  })

  for (let i = 0; i < rowData.length; i++) {
    let row = rowData[i]
    for (let p = 0; p < row.length; p++) {
      let score = row[p]
      if (score === "") score = 0

      score = parseInt(score)
      scores[p].totals += score
      scores[p].history.push(score)
    }
  }

  return scores
}
