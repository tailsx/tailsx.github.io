"use client"
import clsx from "clsx"
import { createContext, useCallback, useContext, useState } from "react"

export default function GoldCaluclator() {
  /*   const toggleStage = useCallback((stageIndex) => {
    if (stageIndex === 3) return
    setCombats((old) => {
      const f = [...old]
      f[stageIndex] = Boolean(!f[stageIndex])
      return f
    })
  }, []) */
  const handleClick = () => {
    console.log(convertRoundsToStreaks(combats))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    console.log(calculateIncomeNextRound(data.get("gold"), 2))
  }

  return (
    <CalculatorProvider>
      <div className="px-2 py-4">
        <h1 className="text-3xl text-center">Stage 2 Planner</h1>
        <div>
          <button onClick={handleClick}>Click</button>
          <form onSubmit={handleSubmit}>
            <RoundHud />
            <input name="gold" type="number" defaultValue={0} max={999} min={0} />
            <button type="submit">Calculate</button>
          </form>
        </div>
      </div>
    </CalculatorProvider>
  )
}

const CalculatorContext = createContext(null)
const CalculatorProvider = ({ children }) => {
  const [rounds, setRounds] = useState([null, null, null, null, null, null, null])

  const toggleRound = useCallback((stageIndex) => {
    // don't allow creep rounds
    if (stageIndex === 3 || stageIndex === 6) return
    setRounds((old) => {
      if (stageIndex === old.length) return [Boolean(...old.slice(0, stageIndex), !old[stageIndex])]
      return [...old.slice(0, stageIndex), Boolean(!old[stageIndex]), ...old.slice(stageIndex + 1)]
    })
  }, [])

  const forcePreset = useCallback((key) => {
    switch (key) {
      case "winstreak":
        setRounds([true, true, true, null, true, true, null])
        return
      case "losestreak":
        setRounds([false, false, false, null, false, false, null])
        return
      case "reset":
      default:
        setRounds([null, null, null, null, null, null, null])
        return
    }
  }, [])

  return (
    <CalculatorContext.Provider value={{ toggleRound, rounds, forcePreset }}>{children}</CalculatorContext.Provider>
  )
}

function RoundHud(props) {
  const { toggleRound, rounds, forcePreset } = useContext(CalculatorContext)
  const handleClick = useCallback(
    (index) => {
      toggleRound(index)
    },
    [toggleRound]
  )
  return (
    <div>
      <div>
        Quick Presets:{" "}
        <div>
          <button onClick={() => forcePreset("winstreak")}>winstreak</button>
        </div>
      </div>
      <div className="flex justify-between">
        {rounds.map((round, index) => {
          const stage = index + 1
          return (
            <button
              type="button"
              className={clsx(
                "p-2 border border-white rounded",
                rounds[index] === null ? "text-gray-400" : rounds[index] ? "text-blue-600" : "text-red-600"
              )}
              onClick={() => handleClick(index)}
              key={index}
            >
              {`2-${stage}`}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function calculateIncomeNextRound(currentGold, currentStreak) {
  const GOLD_BASE_PER_ROUND = 5
  const GOLD_STREAKS = [0, 0, 1, 1, 2, 3]
  const interest = Math.floor(currentGold / 10)
  const streak = GOLD_STREAKS[currentStreak]
  return {
    total: GOLD_BASE_PER_ROUND + interest + streak,
    breakdown: {
      base: GOLD_BASE_PER_ROUND,
      interest,
      streak,
    },
  }
}

function calculateGold(rounds, curentGold = 0) {
  return calculateIncomeNextRound(20, 1)
}

function convertRoundsToStreaks(rounds) {
  const streaks = []

  let current = 0

  // fix streak so round 4 doesn't count
  for (let i = 0; i <= rounds.length; i++) {
    const round = rounds[i]
    if (i === 3) continue
    if (current === 0) {
      current = round ? 1 : -1
      continue
    }

    if (Math.sign(current) === 1 && round) {
      current += 1
    } else if (Math.sign(current) === -1 && !round) {
      current -= 1
    } else {
      streaks.push(Math.abs(current))
      current = round ? 1 : -1
    }
  }

  return streaks
}
