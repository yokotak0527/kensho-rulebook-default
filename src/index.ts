import isNumber          from './isNumber'
import isString          from './isString'
import isNegativeNumber  from './isNegativeNumber'
import isPositiveNumber  from './isPositiveNumber'
import isInteger         from './isInteger'
import isNegativeInteger from './isNegativeInteger'
import isPositiveInteger from './isPositiveInteger'
import isNaturalNumber   from './isNaturalNumber'
import isAge             from './isAge'
import regexp            from './regexp'
import isEmpty           from './isEmpty'
import exists            from './exists'
import isEmail           from './isEmail'
import equal             from './equal'
import isZero            from './isZero'

const book:Kensho.RuleBook = {
  isNumber,
  isString,
  isNegativeNumber,
  isPositiveNumber,
  isInteger,
  isNegativeInteger,
  isPositiveInteger,
  isNaturalNumber,
  isAge,
  regexp,
  isEmpty,
  exists,
  isEmail,
  equal,
  isZero
}

export default book