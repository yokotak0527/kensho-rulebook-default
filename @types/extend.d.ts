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
     * EN : value is negative integer. ex, -1, -2, -3...  
     * JP : 値が負の整数である 例 -1, -2, -3...
     */
    'isNegativeInteger': (
      value: number,
      option: {
        /** include 0. default `false` */
        zero? : boolean
      }
    )=>boolean
    /**
     * EN : value is natural number. ex, 1, 2, 3...  
     * JP : 値が自然数である 例 1, 2, 3...
     */
    'isNaturalNumber': (
      value: number,
      option: {
        /** include 0. default `true` */
        zero? : boolean
      }
    )=>boolean
  }
}