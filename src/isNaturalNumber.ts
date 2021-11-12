import isPositiveInteger from './isPositiveInteger'

const isNaturalNumber:Kensho.RuleBook['isPositiveInteger'] = function isNatualNumber(value, option = {}) {
  return isPositiveInteger(value, option)
}

export default isNaturalNumber