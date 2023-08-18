export const processRawTFT = (entries) => {
  let mappings = {}

  for (let entry of entries) {
    const { effects, desc } = entry

    if (effects) {
      for (let effectKey of Object.keys(effects)) {
        const variables = typeof desc === "string" ? desc.match(/@[A-Za-z0-9]+@/g) || [] : []
        if (mappings[effectKey]) {
          mappings[effectKey] = mappings[effectKey].filter((a) => variables.includes(a))
        } else {
          mappings[effectKey] = variables
        }
      }
    }
  }
  return mappings
}
