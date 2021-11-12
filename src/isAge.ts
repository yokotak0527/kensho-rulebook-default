import isPositiveInteger from './isPositiveInteger'

const isAge:Kensho.RuleBook['isAge'] = function(value, option){
  if (!isPositiveInteger(value, { zero : true })) return false

  /**  */
  const max = option.max ?? 125

  return value <= max
}

export default isAge