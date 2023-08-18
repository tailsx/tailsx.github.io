"use client"
import { useCallback, useState } from "react"
import { ITEMS } from "./items"

export default function ItemsComponents() {
  const [comp, setComp] = useState([])
  return (
    <div>
      <h1>Items Comparison</h1>
      <div>
        {comp.map((id) => {
          return (
            <div key={id} onClick={() => setComp((old) => old.filter((o) => o !== id))}>
              {id}
            </div>
          )
        })}
      </div>
      <ComponentsSelector
        onClick={(id) =>
          setComp((old) => {
            if (old.length >= 2) return old

            return [...old, id]
          })
        }
      />
    </div>
  )
}


function ComponentsSelector(props) {
  const { onClick } = props
  const memoHandlerClick = useCallback(
    (id) => {
      onClick(id)
    },
    [onClick]
  )

  return (
    <div>
      {ITEMS.map(({ id }) => {
        return <ItemComponent key={id} id={id} onClick={memoHandlerClick} />
      })}
    </div>
  )
}

function ItemComponent(props) {
  const { id, onClick } = props
  return <div onClick={() => onClick(id)}>{id}</div>
}
