import isString from './isString'

const regexp:Kensho.RuleBook['regexp'] = function(value, option){
  if(!isString(value)) return false

  if (!option.regexp) return true
  return option.regexp.test(value)
}

export default regexp