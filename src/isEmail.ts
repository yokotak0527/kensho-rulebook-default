import isString from './isString'
import regexp from './regexp'

export const isEmail: Kensho.RuleBook['isEmail'] = (value) => {
  if (!isString(value)) return false

  /** @see https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript */
  return regexp(value, { regexp : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })
}

export default isEmail