import isNegativeNumber from '../src/isNegativeNumber'

describe('isNegativeNumber', ()=>{
  test('pass the negative number', ()=>{
    expect(isNegativeNumber(0, { zero : true })).toBeTruthy()
    expect(isNegativeNumber(-1, {})).toBeTruthy()
    expect(isNegativeNumber(-1.1, {})).toBeTruthy()
  })

  test('pass the positive number', ()=>{
    expect(isNegativeNumber(0, {})).toBeFalsy()
    expect(isNegativeNumber(1, {})).toBeFalsy()
    expect(isNegativeNumber(1.1, {})).toBeFalsy()
  })

  test('pass the not number', ()=>{
    expect(isNegativeNumber('' as unknown as number, {})).toBeFalsy()
    expect(isNegativeNumber(null as unknown as number, {})).toBeFalsy()
    expect(isNegativeNumber(undefined as unknown as number, {})).toBeFalsy()
    expect(isNegativeNumber(NaN, {})).toBeFalsy()
  })
})