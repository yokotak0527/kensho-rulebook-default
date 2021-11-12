import isNumber from './isNumber'
import isNegativeNumber from './isNegativeNumber'
import isPositiveNumber from './isPositiveNumber'
import isInteger from './isInteger'
import isNegativeInteger from './isNegativeInteger'
import isPositiveInteger from './isPositiveInteger'
import isNaturalNumber from './isNaturalNumber'
import isAge from './isAge'
import isString from './isString'

const book:Kensho.RuleBook = {
  isNumber,
  isNegativeNumber,
  isPositiveNumber,
  isInteger,
  isNegativeInteger,
  isPositiveInteger,
  isNaturalNumber,
  isAge,
  isString
}

export default book