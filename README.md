# Kensho-rulebook-default

[Kensho](https://www.npmjs.com/package/@yokotak0527/kensho) ruleBook package.

# Install

```
$ npm i @yokotak0527/kensho-rulebook-default
```

# Usage

```js
import Kensho from '@yokotak0527/kensho'
import ruleBook from '@yokotak0527/kensho-rulebook-default'

// if you are using CommonJS
const Kensho = require('@yokotak0527/kensho')
const ruleBook = require('@yokotak0527/kensho-rulebook-default')

Kensho.rule.import(ruleBook)
```

# rule list

## isNumber(value: unknown)

The value is a number.

## isNegativeNumber(value: number, option:Object)

The value is a negative number.  
ex. zero, -1, -1.1, -3, -4...

| option prop. | type      | default | desc. |
|--------------|-----------|---------|-------|
| `zero`       | `boolean` | `false` | include 0 as negative number. |

## isPositiveNumber(value: number, option:Object)

The value is a positive number.  
ex. zero, 1, 1.1, 3, 4...

| option prop. | type      | default | desc. |
|--------------|-----------|---------|-------|
| `zero`       | `boolean` | `true`  | include 0 as positive number. |

## isInteger(value: number)

The value is an integer.

## isNegativeInteger(value: number, option: Object)

The value is a negative integer.  
ex. -1, -2, -3, -4...

| option prop. | type      | default | desc. |
|--------------|-----------|---------|-------|
| `zero`       | `boolean` | `false` | include 0 as negative integer. |

## isPositiveInteger(value: number, option: Object)

The value is a positive integer.  
ex. 0, 1, 2, 3, 4...

| option prop. | type      | default | desc. |
|--------------|-----------|---------|-------|
| `zero`       | `boolean` | `true`  | include 0 as positive integer. |

## isNaturalNumber(value: number, option: Object)

The value is a natural number. This is as alias for `isPositiveInteger()`.  
ex. 0, 1, 2, 3, 4...

| option prop. | type      | default | desc. |
|--------------|-----------|---------|-------|
| `zero`       | `boolean` | `true`  | include 0 as natural number. |

## isAge(value: number, option: Object)

The value is valid for age.

| option prop. | type      | default | desc. |
|--------------|-----------|---------|-------|
| `max`        | `number`  | `125`   | upper limit for age. include this value. |

## isString(value: unknown)

The value is a string.

## regexp(value: string, option: Object)

The value matches a regular expression.   
Returns `true` if no regular expression is specified in `option.regexp`.

| option prop. | type      | default | desc. |
|--------------|-----------|---------|-------|
| `regexp`     | `RegExp`  |         | Returns `true` if no regular expression is specified in `option.regexp`. |

## isEmpty(value: any)

The value is empty.  
Support types are `undefined`, `null`, `string`, `Array<any>`, `Object`.
If you pass other then above types, returns `false`.

## exists(value: any)

The value is existed.  
Returns the opposite result of `isEmpty()`.

## isEmail(value: string)

The value is valid as e-mail address.

## equal(value: any, option: Object)

The value same as `option.isSame`.  
This is depend on [fast-deep-equal](https://www.npmjs.com/package/fast-deep-equal).

| option prop. | type           | default | desc. |
|--------------|----------------|---------|-------|
| `isSame`     | `typeof value` |         |       |

## isZero(value: number)

The value is 0.

