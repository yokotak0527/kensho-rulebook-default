import isNumber from './isNumber'

const isPositiveNumber:Kensho.RuleBook['isPositiveNumber'] = function isPositiveNumber(value, option = {}) {
  if (!isNumber(value)) return false

  /** include 0 */
  const zero = option.zero ?? true

  if (zero) {
    return value >= 0
  } else {
    return value > 0
  }
}

export default isPositiveNumber