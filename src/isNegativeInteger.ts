import isInteger from './isInteger'

const isNegativeInteger:Kensho.RuleBook['isNegativeInteger'] = function isNegativeInteger(value, option = {}) {
  if (!isInteger(value)) return false

  /** include 0 */
  const zero = option.zero ?? false

  return zero ? value <= 0 : value < 0
}

export default isNegativeInteger