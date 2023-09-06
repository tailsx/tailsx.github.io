"use client"
import clsx from "clsx"
import { createContext, useCallback, useContext, useState, useMemo } from "react"
import Gold from "./GoldCard"
import RoundHud from "./RoundHud"
import { CalculatorContext, CalculatorProvider } from "./GoldContext"

export default function GoldCaluclator() {
  return (
    <CalculatorProvider>
      <Stage2Calculator />
    </CalculatorProvider>
  )
}

function Stage2Calculator() {
  const { toggleRound, results, rounds, setResults, forcePreset, computeRounds, calculation } =
    useContext(CalculatorContext)
  const [userConfig, setUserConfig] = useState({})
  const [summary, setSummary] = useState(null)

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

    console.log(computeRounds(parseInt(data.get("gold")), userConfig.rounds))
  }

  const handleButtonClick = (config) => {
    setUserConfig(config)
    setSummary(computeRounds(parseInt(config.startingGold), config.rounds))
  }

  return (
    <div className="px-2 py-4 theme-tft bg-primary min-h-screen min-w-screen">
      <h1 className="text-3xl text-center text-secondary">Stage 2 Planner</h1>
      <StartingConfig rounds={rounds} onButtonClick={handleButtonClick} />
      <Summary startGold={5} startRound={1} summary={summary} />
    </div>
  )
}

function StartingConfig(props) {
  const [rounds, setRounds] = useState(props.rounds.map(() => null))

  const handleConfigSubmit = (e) => {
    e.preventDefault()
    if (props.onButtonClick) {
      props.onButtonClick({
        startingRound: e.target.startingRound.value,
        startingGold: e.target.startingGold.value,
        rounds,
      })
    }
  }
  const handleRoundClick = useCallback((index) => {
    if (index === 3 || index === 6) return
    setRounds((prev) => {
      const newRounds = [...prev]
      newRounds[index] = newRounds[index] === 1 ? -1 : 1
      return newRounds
    })
  }, [])

  return (
    <div>
      <form onSubmit={handleConfigSubmit} className="flex flex-col gap-4">
        <Input label="Current Round" size="sm" name="startingRound" />
        <Input label="Current Gold" name="startingGold" />

        <RoundHud list={rounds} onButtonClick={handleRoundClick} />
        <button className="bg-primary shadow-xl px-4 py-4 rounded">
          <span className="text-xl">Start Planning</span>
        </button>
      </form>
    </div>
  )
}

function Input(props) {
  const { type, name, value, onChange, label, size = "auto" } = props

  return (
    <label className="flex">
      <span className="w-40 flex-shrink-0">{label}</span>
      <input
        className={clsx(
          "bg-white text-black/70",
          size === "auto" ? "flex-grow" : size === "xs" ? "w-8" : size === "sm" ? "w-12" : ""
        )}
        name={name}
        type={type || "text"}
      />
    </label>
  )
}

function Button(props) {
  return <button className="bg-primary">{props.children}</button>
}

function Summary(props) {
  const { startGold, startRound, summary } = props

  const header = useMemo(() => {
    return summary
      ? summary.map((r) => {
          return <th key={`head-${r.round.round}`}>{r.round.round}</th>
        })
      : null
  }, [summary])

  const body = useMemo(() => {
    return summary
      ? summary.map((r) => {
          return <td key={`body-${r.round.round}`}>{r.gold.end}</td>
        })
      : null
  }, [summary])

  return (
    <div>
      {`Starting at round 2-${startRound} with ${startGold}, we the gold is as follows`}

      <table className="border-collapse table-auto w-full text-center border">
        <thead className="font-extrabold">
          <tr>{header}</tr>
        </thead>
        <tbody className="text-white">
          <tr>{body}</tr>
        </tbody>
      </table>
    </div>
  )
}

function RoundCalculate(props) {
  return (
    <div>
      {props.data &&
        props.data.map((r, key) => {
          return <Gold key={key} value={r.gold.end} />
        })}
    </div>
  )
}
