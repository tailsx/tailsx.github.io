"use client"
import clsx from "clsx"
import { createContext, useCallback, useContext, useState } from "react"

window.convertRoundsToStreaks = convertRoundsToStreaks

export default function GoldCaluclator() {
  return (
    <CalculatorProvider>
      <Stage2Calculator />
    </CalculatorProvider>
  )
}

function Stage2Calculator() {
  const { toggleRound, rounds, forcePreset } = useContext(CalculatorContext)
  const handleRoundClick = useCallback(
    (index) => {
      toggleRound(index)
    },
    [toggleRound]
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    //console.log(calculateIncomeNextRound(data.get("gold"), 2))
    console.log(...calculateGold(parseInt(data.get("gold")), rounds))
  }

  return (
    <div className="px-2 py-4">
      <h1 className="text-3xl text-center">Stage 2 Planner</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <button type="button" onClick={() => forcePreset("winstreak")}>
            winstreak
          </button>
          <RoundHud rounds={rounds} onRoundClick={handleRoundClick} />
          <input name="gold" type="number" defaultValue={0} max={999} min={0} />
          <button type="submit">Calculate</button>
        </form>
      </div>
    </div>
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
  const handleClick = (index) => {
    if (props?.onRoundClick) return props.onRoundClick(index)
  }
  return (
    <div>
      <div className="flex justify-between">
        {props.rounds.map((round, index) => {
          const stage = index + 1
          return (
            <button
              type="button"
              className={clsx(
                "p-2 border border-white rounded",
                props.rounds[index] === null ? "text-gray-400" : props.rounds[index] ? "text-blue-600" : "text-red-600"
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

function calculateGold(startGold, rounds) {
  const GOLD_BASE_PER_ROUND = 5
  const GOLD_STREAKS = [0, 0, 1, 1, 2, 3]

  const summary = []
  for (let i = 0; i < rounds.length; i++) {
    const interest = Math.floor(startGold / 10)
    if (i === 0) {
      summary.push({
        goldStart: startGold,
        income: GOLD_BASE_PER_ROUND + interest,
        goldEnd: startGold + GOLD_BASE_PER_ROUND + interest,
        rounds,
      })
      continue
    }

    if (i === 3) {
      summary.push({ ...summary[i - 1], i })
      continue
    }

    const streak = GOLD_STREAKS[convertRoundsToStreaks(rounds.slice(0, i)).slice(-1)[0]]
    summary.push({
      i,
      goldStart: summary[i - 1].goldEnd,
      income: GOLD_BASE_PER_ROUND + interest + streak,
      goldEnd: summary[i - 1].goldEnd + GOLD_BASE_PER_ROUND + interest + streak,
      rounds,
      do: rounds.slice(0, i),
      check: convertRoundsToStreaks(rounds.slice(0, i)),
      check2: convertRoundsToStreaks(rounds.slice(0, i)).slice(-1),
    })
  }

  return summary
}

function convertRoundsToStreaks(rounds) {
  if (rounds.length === 0) return []
  if (rounds.length === 1) return [1]
  const streaks = []

  let current = 0

  // fix streak so round 4 doesn't count
  for (let i = 0; i < rounds.length; i++) {
    const round = rounds[i]
    if (round === null) continue
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

  // push whatever streak at end
  streaks.push(Math.abs(current))

  return streaks
}
