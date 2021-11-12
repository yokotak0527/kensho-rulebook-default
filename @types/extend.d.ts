declare namespace Kensho {
  interface RuleBook {
    /**
     * value is number
     */
    'isNumber': (value: number)=>boolean
    /**
     * EN : value is integer. ex, -2, -1, 0, 1, 2...  
     * JP : 値が整数である。例 -2, -1, 0, 1, 2...
     */
    'isInteger': (value: number)=>boolean
    /**
     * EN : value is negative integer. ex, zero, -1, -2, -3...  
     * JP : 値が負の整数である 例 zero, -1, -2, -3...
     */
    'isNegativeInteger': (
      value: number,
      option: {
        /** include 0. default `false` */
        zero? : boolean
      }
    )=>boolean
    /**
     * EN : value is negative integer. ex, zero, 1, 2, 3...  
     * JP : 値が正の整数である 例 zero, 1, 2, 3...
     */
    'isPositiveInteger': (
      value: number,
      option: {
        /** include 0. default `true` */
        zero? : boolean
      }
    )=>boolean
    /**
     * EN : value is natural number. ex, zero, 1, 2, 3...  
     * JP : 値が自然数である 例 zero, 1, 2, 3...
     */
    'isNaturalNumber': (
      value: number,
      option: {
        /** include 0. default `true` */
        zero? : boolean
      }
    )=>boolean
    /**
     * EN : value is valid for age. ex. 0, 1, 2...max  
     * JP : 値は年齢として妥当である。 例 0, 1, 2...max
     */
    'isAge': (
      value: number,
      option: {
        /** upper limit for age. include this value. default `125` */
        max? : number
      }
    )=>boolean
  }
}