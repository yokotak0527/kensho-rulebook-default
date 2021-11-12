import isNumber from './isNumber'
import isInteger from './isInteger'
import isNegativeInteger from './isNegativeInteger'
import isPositiveInteger from './isPositiveInteger'
import isNaturalNumber from './isNaturalNumber'
import isAge from './isAge'

const book:Kensho.RuleBook = {
  isNumber,
  isInteger,
  isNegativeInteger,
  isPositiveInteger,
  isNaturalNumber,
  isAge
}

export default book