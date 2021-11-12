import isInteger from './isInteger'

const isNaturalNumber:Kensho.RuleBook['isNaturalNumber'] = function isNatualNumber(value, option = {}) {
  if (!isInteger(value)) return false

  /** include 0 */
  const zero = option.zero ?? true

  if (zero) {
    return value >= 0
  } else {
    return value > 0
  }
}

export default isNaturalNumber