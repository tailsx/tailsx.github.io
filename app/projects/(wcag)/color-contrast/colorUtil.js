export function adjustForegroundColorForContrast(foregroundHex, backgroundHex, targetContrastRatio) {
  function gammaCorrect(c) {
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  }

  function calcLuminance(r, g, b) {
    return 0.2126 * gammaCorrect(r) + 0.7152 * gammaCorrect(g) + 0.0722 * gammaCorrect(b)
  }

  function toHex(value) {
    let hex = Math.round(value * 255).toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }

  const fgRgb = {
    R: parseInt(foregroundHex.slice(1, 3), 16) / 255,
    G: parseInt(foregroundHex.slice(3, 5), 16) / 255,
    B: parseInt(foregroundHex.slice(5, 7), 16) / 255,
  }

  const bgRgb = {
    R: parseInt(backgroundHex.slice(1, 3), 16) / 255,
    G: parseInt(backgroundHex.slice(3, 5), 16) / 255,
    B: parseInt(backgroundHex.slice(5, 7), 16) / 255,
  }

  const bgLuminance = calcLuminance(bgRgb.R, bgRgb.G, bgRgb.B)
  const fgLuminance = calcLuminance(fgRgb.R, fgRgb.G, fgRgb.B)

  let results = []

  for (let color of ["R", "G", "B"]) {
    let otherColorsLuminance = fgLuminance - fgRgb[color] * { R: 0.2126, G: 0.7152, B: 0.0722 }[color]

    let targetLuminance1 = targetContrastRatio * (bgLuminance + 0.05) - 0.05
    let targetLuminance2 = (bgLuminance + 0.05) / targetContrastRatio - 0.05

    let newColorValue1 = (targetLuminance1 - otherColorsLuminance) / { R: 0.2126, G: 0.7152, B: 0.0722 }[color]
    let newColorValue2 = (targetLuminance2 - otherColorsLuminance) / { R: 0.2126, G: 0.7152, B: 0.0722 }[color]

    let feasibleNewColorValue = null

    if (newColorValue1 >= 0 && newColorValue1 <= 1) {
      feasibleNewColorValue = newColorValue1
    } else if (newColorValue2 >= 0 && newColorValue2 <= 1) {
      feasibleNewColorValue = newColorValue2
    }

    if (feasibleNewColorValue !== null) {
      let newColor =
        "#" +
        (color === "R" ? toHex(feasibleNewColorValue) : toHex(fgRgb.R)) +
        (color === "G" ? toHex(feasibleNewColorValue) : toHex(fgRgb.G)) +
        (color === "B" ? toHex(feasibleNewColorValue) : toHex(fgRgb.B))
      results.push(newColor)
    } else {
      results.push(null)
    }
  }
  return results
}
