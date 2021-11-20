import fastDeepEqual from 'fast-deep-equal/es6'

const equal:Kensho.RuleBook['equal'] = (value, option) => {
  const { isSame } = option

  return fastDeepEqual(value, isSame)
}

export default equal