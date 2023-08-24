"use client"
import clsx from "clsx"
import { createContext, useCallback, useContext, useState } from "react"

export default function GoldCaluclator() {
  return (
    <CalculatorProvider>
      <Stage2Calculator />
    </CalculatorProvider>
  )
}

function Stage2Calculator() {
  const { toggleRound, results, setResults, forcePreset, computeRounds, calculation } = useContext(CalculatorContext)
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

    if (results.filter((r, index) => index !== 3 && index !== 6 && r === null).length > 0) {
      alert("Please fill out all rounds")
    } else {
      computeRounds(parseInt(data.get("gold")))
    }
  }

  return (
    <div className="px-2 py-4">
      <h1 className="text-3xl text-center">Stage 2 Planner</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <button type="button" onClick={() => forcePreset("winstreak")}>
            winstreak
          </button>
          <RoundHud rounds={results} onRoundClick={handleRoundClick} />
          <input name="gold" type="number" defaultValue={0} max={999} min={0} />
          <input name="carousel" type="number" defaultValue={1} max={3} min={1} />
          <button type="submit">Calculate</button>
        </form>
      </div>
      <div>
        {calculation &&
          calculation.map((r, key) => {
            return <div key={r.round.round}>{`Gold: ${r.gold.end}`}</div>
          })}
      </div>
    </div>
  )
}

const CalculatorContext = createContext(null)
const CalculatorProvider = ({ children }) => {
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
      if (stageIndex === old.length) return [Boolean(...old.slice(0, stageIndex), !old[stageIndex])]
      return [...old.slice(0, stageIndex), Boolean(!old[stageIndex]), ...old.slice(stageIndex + 1)]
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
    (startingGold) => {
      const GOLD_STREAKS = [0, 0, 1, 1, 2, 3]
      const GOLD_CAROUSEL = 3
      //For every round, calculate the gold per round
      const output = []
      let runningGold = startingGold
      let streaks = 0

      for (let i = 0; i < rounds.length; i++) {
        const round = rounds[i]
        const result = results[i]
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
          const income = 5 + Math.floor(runningGold / 10)
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
            output.push({
              round,
              gold: {
                start: runningGold,
                end: runningGold + income + GOLD_STREAKS[Math.abs(streaks)],
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

            streaks += result
          }
        }
      }
      setCalculation(output)
    },
    [rounds, results]
  )

  return (
    <CalculatorContext.Provider value={{ toggleRound, results, setResults, forcePreset, computeRounds, calculation }}>
      {children}
    </CalculatorContext.Provider>
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
