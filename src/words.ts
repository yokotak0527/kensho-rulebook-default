import isString from "./isString"

const words:Kensho.RuleBook['words'] = (value, option) => {
  if (!isString(value)) return false

  const strLength = value.length

  const { min = 0, max = -1 } = option

  if (min < 0) throw new Error(`option.min must be greater than or equal to 0.`)

  if (max === -1) {
    return strLength >= min
  }
  if (min > max) throw new Error(`option.min must be less than or equal to option.max.`)
  return strLength <= max
}

export default words