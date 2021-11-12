import isPositiveInteger from '../src/isPositiveInteger'

describe('isPositiveInteger', ()=>{

  test('pass the positive integer', ()=>{
    expect(isPositiveInteger(0, {})).toBeTruthy()
    expect(isPositiveInteger(1, {})).toBeTruthy()
    expect(isPositiveInteger(10, {})).toBeTruthy()
  })

  test('pass the negative integer', ()=>{
    expect(isPositiveInteger(0, { zero : false })).toBeFalsy()
    expect(isPositiveInteger(-1, {})).toBeFalsy()
    expect(isPositiveInteger(-10, {})).toBeFalsy()
  })

  test('pass the not integer', ()=>{
    expect(isPositiveInteger(0.1, {})).toBeFalsy()
    expect(isPositiveInteger(0.9, {})).toBeFalsy()
    expect(isPositiveInteger(1.1, {})).toBeFalsy()
  })

  test('pass the not number', ()=>{
    expect(isPositiveInteger('0' as unknown as number, {})).toBeFalsy()
    expect(isPositiveInteger('1' as unknown as number, {})).toBeFalsy()
    expect(isPositiveInteger('10' as unknown as number, {})).toBeFalsy()
    expect(isPositiveInteger(undefined as unknown as number, {})).toBeFalsy()
  })
})