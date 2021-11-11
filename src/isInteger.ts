const isInteger:Kensho.RuleBook['isInteger'] = function(value) {
  // if value is NaN, return false
  return Number.isInteger(value)
}

export default isInteger