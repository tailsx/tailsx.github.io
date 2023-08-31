"use client"

import { useCallback, useState } from "react"
import { adjustForegroundColorForContrast } from "./colorUtil"

export default function ColorContrast() {
  const [colorForeground, setColorForeground] = useState("#ffffff")
  const [colorBackground, setColorBackground] = useState("#000000")

  const [ratio, setRatio] = useState(21)

  const handleClick = useCallback(() => {
    setRatio(calcContrastRatio(colorForeground, colorBackground))
    //console.log(suggestColorAsHex(colorForeground, colorBackground, 4.5))
    console.log(adjustForegroundColorForContrast(colorForeground, colorBackground, 4.5))
  }, [colorForeground, colorBackground])

  return (
    <div className="bg-neutral">
      <h1>Color Contrast</h1>
      <section>
        <div className="flex justify-around">
          <HexColor color={colorForeground} onChange={setColorForeground} />
          <HexColor color={colorBackground} onChange={setColorBackground} />
        </div>
        <div className="text-center py-2">
          <button className="bg-white" onClick={handleClick}>
            Compare
          </button>
        </div>
      </section>
      <section>
        <ContrastRatio ratio={ratio} />
        <Suggestions />
      </section>
    </div>
  )
}

function Suggestions(props) {
  const { ratio, color } = props
  if (ratio < 4.5) {
    return <div>Text is too small. Meets WCAG 2.0 AA standards.</div>
  }

  if (ratio < 7) {
    return <div>Text is too small. Meets WCAG 2.0 AAA standards.</div>
  }

  return <div>No Suggestions. Meets WCAG 2.0 AA and AAA standards.</div>
}

function ContrastRatio(props) {
  const { ratio } = props

  return (
    <div className="border border-white px-2 py-4">
      <span>{`Contrast Ratio - ${ratio}: 1`}</span>
    </div>
  )
}

function HexColor(props) {
  const { color, onChange } = props

  const handleColorChange = (e) => {
    if (e.target.value.length === 7) {
      onChange(e.target.value)
    }
  }

  return (
    <div>
      <input type="text" defaultValue={color} onBlur={handleColorChange} />
      <div className="w-20 h-20" style={{ backgroundColor: color }}></div>
    </div>
  )
}

function calcContrastRatio(color1, color2) {
  const color1Luminance = calcRelativeLuminance(color1)
  const color2Luminance = calcRelativeLuminance(color2)

  return (Math.max(color1Luminance, color2Luminance) + 0.05) / (Math.min(color1Luminance, color2Luminance) + 0.05)
}

function calcRelativeLuminance(color) {
  const rgb = hexToRgb(color).map((hue) => {
    const normalized = hue / 255
    return normalized <= 0.03928 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4)
  })

  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]
}

function hexToRgb(hex) {
  const r = parseInt(hex.substring(1, 3), 16)
  const g = parseInt(hex.substring(3, 5), 16)
  const b = parseInt(hex.substring(5, 7), 16)

  return [r, g, b]
}
