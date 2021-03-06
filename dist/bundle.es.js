import fastDeepEqual from 'fast-deep-equal/es6';

const isNumber = function (value) {
    if (Number.isNaN(value))
        return false;
    return typeof value === 'number';
};

const isString = function (value) {
    return typeof value === 'string';
};

const isNegativeNumber = function isNegativeNumber(value, option = {}) {
    if (!isNumber(value))
        return false;
    const zero = option.zero ?? false;
    return zero ? value <= 0 : value < 0;
};

const isPositiveNumber = function isPositiveNumber(value, option = {}) {
    if (!isNumber(value))
        return false;
    const zero = option.zero ?? true;
    if (zero) {
        return value >= 0;
    }
    else {
        return value > 0;
    }
};

const isInteger = function (value) {
    return Number.isInteger(value);
};

const isNegativeInteger = function isNegativeInteger(value, option = {}) {
    if (!isInteger(value))
        return false;
    const zero = option.zero ?? false;
    return zero ? value <= 0 : value < 0;
};

const isPositiveInteger = function isPositiveInteger(value, option = {}) {
    if (!isInteger(value))
        return false;
    const zero = option.zero ?? true;
    if (zero) {
        return value >= 0;
    }
    else {
        return value > 0;
    }
};

const isNaturalNumber = function isNatualNumber(value, option = {}) {
    return isPositiveInteger(value, option);
};

const isAge = function (value, option) {
    if (!isPositiveInteger(value, { zero: true }))
        return false;
    const max = option.max ?? 125;
    return value <= max;
};

const regexp = function (value, option) {
    if (!isString(value))
        return false;
    if (!option.regexp)
        return true;
    return option.regexp.test(value);
};

const isEmpty = function (value) {
    if (value === undefined)
        return true;
    if (value === null)
        return true;
    if (value === '')
        return true;
    if (Array.isArray(value) && value.length === 0)
        return true;
    if (value instanceof Object && Object.keys(value).length === 0)
        return true;
    return false;
};

const exists = (value) => !isEmpty(value);

const isEmail = (value) => {
    if (!isString(value))
        return false;
    return regexp(value, { regexp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ });
};

const equal = (value, option) => {
    const { isSame } = option;
    return fastDeepEqual(value, isSame);
};

const isZero = value => {
    if (!isNumber(value))
        return false;
    return value === 0;
};

const words = (value, option) => {
    if (!isString(value))
        return false;
    const strLength = value.length;
    const { min = 0, max = -1 } = option;
    if (min < 0)
        throw new Error(`option.min must be greater than or equal to 0.`);
    if (max === -1) {
        return strLength >= min;
    }
    if (min > max)
        throw new Error(`option.min must be less than or equal to option.max.`);
    return strLength <= max;
};

const book = {
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
    isZero,
    words
};

export { book as default };
//# sourceMappingURL=bundle.es.js.map
