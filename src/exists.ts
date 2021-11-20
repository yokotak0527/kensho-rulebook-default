import isEmpty from "./isEmpty"

const exists:Kensho.RuleBook['exists'] = (value) => !isEmpty(value)

export default exists