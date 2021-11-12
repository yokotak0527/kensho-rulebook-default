import isNumber from './isNumber'

const isNegativeNumber:Kensho.RuleBook['isNegativeNumber'] = function isNegativeNumber(value, option = {}) {
  if (!isNumber(value)) return false

  /** include 0 */
  const zero = option.zero ?? false

  return zero ? value <= 0 : value < 0
}

export default isNegativeNumber