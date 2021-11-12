# Kensho-rulebook-default

[Kensho](https://www.npmjs.com/package/@yokotak0527/kensho) ruleBook package.

# Install

## npm

```
$ npm i @yokotak0527/kensho-rulebook-default
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@yokotak0527/kensho-rulebook-default/dist/bundle.iife.min.js"></script>
```

# Usage

## CommonJS

```js
import Kensho from '@yokotak0527/kensho'
import ruleBook from '@yokotak0527/kensho-rulebook-default'

// if you are using CommonJS
const Kensho = require('@yokotak0527/kensho')
const ruleBook = require('@yokotak0527/kensho-rulebook-default')

Kensho.rule.import(ruleBook)
```

# rule list

## isNumber(value: number)

value is number.

## isInteger(value: number)

value is integer.

## isNegativeInteger(value: number, option: Object)

value is negative integer.  
ex. -1, -2, -3, -4...

| option prop. | type      | default | desc. |
|--------------|-----------|---------|-------|
| `zero`       | `boolean` | `false` | include 0 as negative integer. |

## isPositiveInteger(value: number, option: Object)

value is positive integer.  
ex. 0, 1, 2, 3, 4...

| option prop. | type      | default | desc. |
|--------------|-----------|---------|-------|
| `zero`       | `boolean` | `true`  | include 0 as positive integer. |

## isNaturalNumber(value: number, option: Object)

value is natural number.This is as alias for `isPositiveInteger()`.  
ex. 0, 1, 2, 3, 4...

| option prop. | type      | default | desc. |
|--------------|-----------|---------|-------|
| `zero`       | `boolean` | `true`  | include 0 as natural number. |