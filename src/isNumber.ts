const isNumber:Kensho.RuleBook['isNumber'] = function(value) {
  if (Number.isNaN(value)) return false
  return typeof value === 'number'
}

export default isNumber