declare namespace Kensho {
  interface RuleBook {
    /**
     * value is number
     */
    'isNumber': <V = unknown>(value: V)=>boolean
    /**
     * EN : value is a string..
     * JP : 値は文字列である
     */
    'isString': <V = unknown>(value: V)=>boolean
    /**
     * EN : value is position number. ex, zero, 1, 1.1, 2...  
     * JP : 値は正数である 例 zero, 1, 1.1, 2...  
     */
    'isPositiveNumber' : (
      value: number,
      option: {
        /** include 0. default `true` */
        zero?: boolean
      }
    )=>boolean
    /**
     * EN : value is negative number. ex, zero, -1, -1.1, -2...  
     * JP : 値は負数である 例 zero, -1, -1.1, -2...  
     */
    'isNegativeNumber' : (
      value: number,
      option: {
        /** include 0. default `false` */
        zero?: boolean
      }
    )=>boolean
    /**
     * EN : value is integer. ex, -2, -1, 0, 1, 2...  
     * JP : 値は整数である。例 -2, -1, 0, 1, 2...
     */
    'isInteger': (value: number)=>boolean
    /**
     * EN : value is negative integer. ex, zero, -1, -2, -3...  
     * JP : 値は負の整数である 例 zero, -1, -2, -3...
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
     * JP : 値は正の整数である 例 zero, 1, 2, 3...
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
     * JP : 値は自然数である 例 zero, 1, 2, 3...
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
    /**
     * EN : The value matches a regular expression. 
     *      Returns `true` if no regular expression is specified in `option.regexp`.
     * -------------------------------------------------------------------------
     * JP : 値は正規表現にマッチする。
     *      もし `option.regexp` に正規表現が指定されていない `true` を返します。
     */
    'regexp': (
      value: string,
      option: {
        regexp?: RegExp
      }
    )=> boolean
    /**
     * EN : The value is empty.
     *      Support types are undefined, null, string, Array<any>, Object.
     *      If you pass other then above types, returns `false`.
     * -------------------------------------------------------------------------
     * JP : 値は空である。
     *      対応している型は undefined, null, string, Array<any>, Object です。
     *      上記以外のタイプを指定した場合は `false` を返します。
     */
    'isEmpty': (value: any)=>boolean
    /**
     * EN : The value is existed.
     *      Returns the opposite result of isEmpty().
     * -------------------------------------------------------------------------
     * JP : 値がある。
     *      isEmpty() の反対の結果を返します。
     */
    'exists': (value: any)=>boolean
    /**
     * EN : The value is valid as e-mail address.
     * JP : 値はメールアドレスとして妥当である。
     */
    'isEmail': (value: string)=>boolean
    /**
     * EN : The value same as `option.isSame`.
     * JP : 値は `option.same` と同じである。
     */
    'equal': <V = any>(
      value: V,
      option: {
        isSame?: V
      }
    )=> boolean
    /**
     * EN : The value is 0.
     * JP : 値は 0 である。
     */
    'isZero': (value: number)=> boolean
    /**
     * EN : The words is between `option.min` and `option.max`.  
     *      Default values are `option.min=0`, `option.max=-1`.  
     *      -1 means do not use.  
     *      If you pass `option.min` as negative number, throw Error.
     *      If you pass number to `option.max` less than `option.min`, throw Error.
     * -------------------------------------------------------------------------
     * JP : 値は `option.min` から `option.max` までの数値である。  
     *      デフォルト値は `option.min=0`, `option.max=-1` です。  
     *      -1 は使用しないことを意味します。  
     *      `option.min` が負の数値を指定した場合はエラーを投げます。
     *      `option.max` が `option.min` より小さい数値を指定した場合はエラーを投げます。
     */
    'words': (
      value: string,
      option: {
        min? : number,
        max? : number
      }
    )=> boolean
  }
}