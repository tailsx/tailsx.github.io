"use client"

import { useEffect } from "react"

export default function ShredTable() {
  useEffect(() => {
    ;(async () => {
      console.log("fewf")
      const res = await fetch("/api/tft")
      const data = await res.json();
      console.log(data)
    })()
  }, [])
  return (
    <table>
      <thead>
        <tr>
          <th>Shred</th>
        </tr>
      </thead>
      <tbody>{}</tbody>
    </table>
  )
}
