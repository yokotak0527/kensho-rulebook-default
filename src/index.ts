import isNumber from './isNumber'
import isInteger from './isInteger'
import isNegativeInteger from './isNegativeInteger'
import isNaturalNumber from './isNaturalNumber'

const book:Kensho.RuleBook = {
  isNumber,
  isInteger,
  isNegativeInteger,
  isNaturalNumber
}

export default book