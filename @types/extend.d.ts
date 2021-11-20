declare namespace Kensho {
  interface RuleBook {
    /**
     * value is number
     */
    'isNumber': <V = unknown>(value: V)=>boolean
    /**
     * EN : value is position number. ex, zero, 1, 1.1, 2...  
     * JP : 値は正数である 例 zero, 1, 1.1, 2...  
     */
    'isPositiveNumber' : <V = unknown>(
      value: V,
      option: {
        /** include 0. default `true` */
        zero?: boolean
      }
    )=>boolean
    /**
     * EN : value is negative number. ex, zero, -1, -1.1, -2...  
     * JP : 値は負数である 例 zero, -1, -1.1, -2...  
     */
    'isNegativeNumber' : <V = unknown>(
      value: V,
      option: {
        /** include 0. default `false` */
        zero?: boolean
      }
    )=>boolean
    /**
     * EN : value is integer. ex, -2, -1, 0, 1, 2...  
     * JP : 値は整数である。例 -2, -1, 0, 1, 2...
     */
    'isInteger': <V = unknown>(value: V)=>boolean
    /**
     * EN : value is negative integer. ex, zero, -1, -2, -3...  
     * JP : 値は負の整数である 例 zero, -1, -2, -3...
     */
    'isNegativeInteger': <V = unknown>(
      value: V,
      option: {
        /** include 0. default `false` */
        zero? : boolean
      }
    )=>boolean
    /**
     * EN : value is negative integer. ex, zero, 1, 2, 3...  
     * JP : 値は正の整数である 例 zero, 1, 2, 3...
     */
    'isPositiveInteger': <V = unknown>(
      value: V,
      option: {
        /** include 0. default `true` */
        zero? : boolean
      }
    )=>boolean
    /**
     * EN : value is natural number. ex, zero, 1, 2, 3...  
     * JP : 値は自然数である 例 zero, 1, 2, 3...
     */
    'isNaturalNumber': <V = unknown>(
      value: V,
      option: {
        /** include 0. default `true` */
        zero? : boolean
      }
    )=>boolean
    /**
     * EN : value is valid for age. ex. 0, 1, 2...max  
     * JP : 値は年齢として妥当である。 例 0, 1, 2...max
     */
    'isAge': <V = unknown>(
      value: V,
      option: {
        /** upper limit for age. include this value. default `125` */
        max? : number
      }
    )=>boolean
    /**
     * EN : value is a string..
     * JP : 値は文字列である
     */
    'isString': <V = unknown>(value: V)=>boolean
    /**
     * EN : The value matches a regular expression. 
     *      Returns `true` if no regular expression is specified in `option.regexp`.
     * -------------------------------------------------------------------------
     * JP : 値は正規表現にマッチする。
     *      もし `option.regexp` に正規表現が指定されていない `true` を返します。
     */
    'regexp': <V = unknown>(
      value: V,
      option: {
        regexp?: RegExp
      }
    )=> boolean
  }
}