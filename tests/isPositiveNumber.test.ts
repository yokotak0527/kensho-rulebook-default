import isPositiveNumber from "../src/isPositiveNumber"

describe('isPositiveNumber', ()=>{
  test('pass the positive number', ()=>{
    expect(isPositiveNumber(0, {})).toBeTruthy()
    expect(isPositiveNumber(1, {})).toBeTruthy()
    expect(isPositiveNumber(1.1, {})).toBeTruthy()
  })

  test('pass the negative number', ()=>{
    expect(isPositiveNumber(0, { zero : false })).toBeFalsy()
    expect(isPositiveNumber(-1, {})).toBeFalsy()
    expect(isPositiveNumber(-1.1, {})).toBeFalsy()
  })

  test('pass the not number', ()=>{
    expect(isPositiveNumber('' as unknown as number, {})).toBeFalsy()
    expect(isPositiveNumber(null as unknown as number, {})).toBeFalsy()
    expect(isPositiveNumber(undefined as unknown as number, {})).toBeFalsy()
    expect(isPositiveNumber(NaN, {})).toBeFalsy()
  })
})