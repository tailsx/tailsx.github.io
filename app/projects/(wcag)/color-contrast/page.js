"use client"

import { useCallback, useState } from "react"

export default function ColorContrast() {
  const [colorForeground, setColorForeground] = useState("#ff0000")
  const [colorBackground, setColorBackground] = useState("#456789")

  const [ratio, setRatio] = useState(21)

  const handleClick = useCallback(() => {
    setRatio(calcContrastRatio(colorForeground, colorBackground))
    console.log(suggestColorAsHex(colorForeground, colorBackground, 4.5))
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

function suggestColorAsHex(startColor, bgColor, targetRatio) {
  const bgLuminance = calcRelativeLuminance(bgColor)

  let targetLuminance = (Math.max(bgLuminance, targetRatio * bgLuminance) + 0.05) / targetRatio - 0.05
  if (targetLuminance < 0) {
    targetLuminance = targetRatio * (Math.min(bgLuminance, targetRatio * bgLuminance) + 0.05) - 0.05
  }

  let startRgb = hexToRgb(startColor)

  let suggestions = []

  // Loop over each RGB component (R, G, B)
  for (let i = 0; i < 3; i++) {
    const component = calcComponentForLuminance(targetLuminance, startColor, ["R", "G", "B"][i])
    if (component > 0 && component <= 255) {
      const tempRgb = [...startRgb]
      tempRgb[i] = component
      suggestions.push(rgbToHex(tempRgb))
    }
  }

  return suggestions
}

function calcComponentForLuminance(luminance, baseColor, component) {
  // Convert the base hex color to its RGB components
  const baseRgb = hexToRgb(baseColor)

  // Calculate the luminance contributed by the components other than the one we want to solve for
  const remainingLuminance =
    luminance -
    (0.2126 * baseRgb[0] * (component !== "R" ? 1 : 0) +
      0.7152 * baseRgb[1] * (component !== "G" ? 1 : 0) +
      0.0722 * baseRgb[2] * (component !== "B" ? 1 : 0))

  let coefficient

  // Get the coefficient for the RGB component we want to solve for
  switch (component) {
    case "R":
      coefficient = 0.2126
      break
    case "G":
      coefficient = 0.7152
      break
    case "B":
      coefficient = 0.0722
      break
    default:
      return null
  }

  // Find the component's normalized value that would yield the remaining luminance
  const normalizedComponent = remainingLuminance / coefficient

  // Inverse the gamma correction/normalization to get the original RGB value
  let hue
  if (normalizedComponent <= 0.03928) {
    hue = normalizedComponent * 12.92
  } else {
    hue = 1.055 * Math.pow(normalizedComponent, 1 / 2.4) - 0.055
  }

  // Convert normalized hue to 0-255 range
  hue = Math.round(hue * 255)

  // If hue is out of the 0-255 range, it's not a valid RGB value, so return null
  if (hue < 0 || hue > 255) {
    return null
  }

  // The hue that will give us the target luminance
  return hue
}

function rgbToHex(rgb) {
  return "#" + rgb.map((x) => x.toString(16).padStart(2, "0")).join("")
}
