import { createContext, useState, useCallback } from "react"

export const CalculatorContext = createContext(null)
export const CalculatorProvider = ({ children }) => {
  const [rounds, setRounds] = useState([
    { round: 1, type: "combat" },
    { round: 2, type: "combat" },
    { round: 3, type: "combat" },
    { round: 4, type: "carousel" },
    { round: 5, type: "combat" },
    { round: 6, type: "combat" },
    { round: 7, type: "creep" },
  ])
  const [results, setResults] = useState([null, null, null, null, null, null, null])
  const [calculation, setCalculation] = useState(null)

  const toggleRound = useCallback((stageIndex) => {
    // don't allow creep rounds
    if (stageIndex === 3 || stageIndex === 6) return
    setResults((old) => {
      const newResults = [...old]
      newResults[stageIndex] = newResults[stageIndex] > 0 ? -1 : 1
      return newResults
    })
  }, [])

  const forcePreset = useCallback((key) => {
    switch (key) {
      case "winstreak":
        setResults([1, 1, 1, null, 1, 1, null])
        return
      case "losestreak":
        setResults([-1, -1, -1, null, -1, -1, null])
        return
      case "reset":
      default:
        setResults([null, null, null, null, null, null, null])
        return
    }
  }, [])

  const computeRounds = useCallback(
    (startingGold, resolutionArray) => {
      console.log({startingGold, resolutionArray})
      const GOLD_STREAKS = [0, 0, 1, 1, 2, 3]
      const GOLD_CAROUSEL = 3
      //For every round, calculate the gold per round
      const output = []
      let runningGold = startingGold
      let streaks = 0

      for (let i = 0; i < rounds.length; i++) {
        const round = rounds[i]
        const result = resolutionArray[i]
        if (round.type === "carousel") {
          output.push({
            round,
            gold: {
              start: runningGold,
              end: runningGold + GOLD_CAROUSEL,
            },
          })
          runningGold += GOLD_CAROUSEL
        }

        if (round.type === "creep") {
          output.push({
            round,
            gold: {
              start: runningGold,
              end: runningGold,
            },
          })
        }

        if (round.type === "combat") {
          let income = 5 + Math.floor(runningGold / 10)
          if (streaks === 0) {
            output.push({
              round,
              gold: {
                start: runningGold,
                end: runningGold + income,
              },
            })
            runningGold += income
            streaks = result
            continue
          }

          // continue streak
          if (Math.sign(streaks) === result) {
            income += result > 0 ? 1 : 0
            income += GOLD_STREAKS[Math.abs(streaks)]

            output.push({
              round,
              gold: {
                start: runningGold,
                end: runningGold + income,
              },
            })
            streaks += Math.sign(streaks)
            runningGold += income
          }
          // streak broken
          else {
            output.push({
              round,
              gold: {
                start: runningGold,
                end: runningGold + income,
              },
            })
            runningGold += income
            streaks += result
          }
        }
      }
      return output
    },
    [rounds, results]
  )

  return (
    <CalculatorContext.Provider
      value={{ rounds, toggleRound, results, setResults, forcePreset, computeRounds, calculation }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}
