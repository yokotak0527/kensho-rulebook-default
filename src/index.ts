import isNumber from './isNumber'
import isInteger from './isInteger'
import isNegativeInteger from './isNegativeInteger'
import isPositiveInteger from './isPositiveInteger'
import isNaturalNumber from './isNaturalNumber'

const book:Kensho.RuleBook = {
  isNumber,
  isInteger,
  isNegativeInteger,
  isPositiveInteger,
  isNaturalNumber
}

export default book