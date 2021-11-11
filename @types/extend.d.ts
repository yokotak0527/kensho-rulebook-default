declare namespace Kensho {
  interface RuleBook {
    /**
     * value is number
     */
    'isNumber': (value:any)=>boolean
    /**
     * EN : value is integer. ex, -2, -1, 0, 1, 2...  
     * JP : 値が整数である。例 -2, -1, 0, 1, 2...
     */
    'isInteger': (value:number)=>boolean
  }
}