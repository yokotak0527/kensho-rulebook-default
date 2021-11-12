import isNaturalNumber from '../src/isNaturalNumber'

describe('isNaturalNumber', ()=>{

  test('pass the positive integer', ()=>{
    expect(isNaturalNumber(0, {})).toBeTruthy()
    expect(isNaturalNumber(1, {})).toBeTruthy()
    expect(isNaturalNumber(10, {})).toBeTruthy()
  })

  test('pass the negative integer', ()=>{
    expect(isNaturalNumber(0, { zero : false })).toBeFalsy()
    expect(isNaturalNumber(-1, {})).toBeFalsy()
    expect(isNaturalNumber(-10, {})).toBeFalsy()
  })

  test('pass the not integer', ()=>{
    expect(isNaturalNumber(0.1, {})).toBeFalsy()
    expect(isNaturalNumber(0.9, {})).toBeFalsy()
    expect(isNaturalNumber(1.1, {})).toBeFalsy()
  })

  test('pass the not number', ()=>{
    expect(isNaturalNumber('0' as unknown as number, {})).toBeFalsy()
    expect(isNaturalNumber('1' as unknown as number, {})).toBeFalsy()
    expect(isNaturalNumber('10' as unknown as number, {})).toBeFalsy()
    expect(isNaturalNumber(undefined as unknown as number, {})).toBeFalsy()
  })
})