import isNaturalNumber from '../src/isNaturalNumber'

describe('isNaturalNumber', ()=>{

  test('pass the natural number', ()=>{
    expect(isNaturalNumber(1, {})).toBeTruthy()
    expect(isNaturalNumber(0, {})).toBeTruthy()
    expect(isNaturalNumber(10, {})).toBeTruthy()
  })
  test('pass the negative number', ()=>{
    expect(isNaturalNumber(0, { zero : false })).toBeFalsy()
    expect(isNaturalNumber(-1, {})).toBeFalsy()
    expect(isNaturalNumber(-10, {})).toBeFalsy()
  })
})