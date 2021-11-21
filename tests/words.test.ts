import words from '../src/words'

describe('words', ()=>{
  test('pass the string within a specified number of characters', ()=>{
    expect(words('hello', {})).toBeTruthy() // 0 or more characters
    expect(words('hello', { min : 0 })).toBeTruthy() // 0 or more characters
    expect(words('hello', { max : -1 })).toBeTruthy() // 0 or more characters
    expect(words('hello', { min : 0, max : -1 })).toBeTruthy() // 0 or more characters
    expect(words('hello', { max :  5 })).toBeTruthy()
    expect(words('hello', { max :  10 })).toBeTruthy()
  })

  test('Pass the string that is outside the specified number of characters', ()=>{
    expect(words('hello', { min : 6 })).toBeFalsy()
    expect(words('hello', { max : 4 })).toBeFalsy()
  })

  test('option.max is smaller than option.min', ()=>{
    expect(()=> words('hello', { min : 4, max : 2 })).toThrow()
  })

  test('pass the negative number to option.min', ()=>{
    expect(()=> words('hello', { min : -1 })).toThrow()
  })

  test('Pass the integer less than or equal to -2 for option.max', ()=>{
    expect(()=> words('hello', { max : -2 })).toThrow()
  })
})