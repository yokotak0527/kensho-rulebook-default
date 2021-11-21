import isNumber from "./isNumber"

const isZero:Kensho.RuleBook['isZero'] = value => {
  if (!isNumber(value)) return false
  
  return value === 0
}

export default isZero