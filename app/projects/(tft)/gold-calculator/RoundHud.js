import { useContext } from "react"
import { CalculatorContext } from "./GoldContext"
import clsx from "clsx"

export default function ListUI(props) {
  const { list, onButtonClick } = props

  return (
    <div>
      <div className="flex justify-between">
        {list.map((round, index) => {
          const stage = index + 1
          return (
            <button
              type="button"
              className={clsx(
                "p-2 border border-white rounded",
                list[index] === null ? "text-gray-400" : list[index] === 1 ? "text-blue-600" : "text-red-600"
              )}
              onClick={() => onButtonClick(index)}
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
