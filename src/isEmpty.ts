const isEmpty:Kensho.RuleBook['isEmpty'] = function(value){
  if (value === undefined) return true
  if (value === null) return true
  if (value === '') return true
  if (Array.isArray(value) && value.length === 0) return true
  if (value instanceof Object && Object.keys(value).length === 0) return true
  return false
}

export default isEmpty