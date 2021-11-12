import isNegativeInteger from '../src/isNegativeInteger'

describe('isNaturalNumber', ()=>{

  test('pass the negative integer', ()=>{
    expect(isNegativeInteger(0, { zero : true })).toBeTruthy()
    expect(isNegativeInteger(-1, {})).toBeTruthy()
    expect(isNegativeInteger(-10, {})).toBeTruthy()
  })

  test('pass the positive integer', ()=>{
    expect(isNegativeInteger(0, {})).toBeFalsy()
    expect(isNegativeInteger(1, {})).toBeFalsy()
    expect(isNegativeInteger(10, {})).toBeFalsy()
  })

  test('pass the not integer', ()=>{
    expect(isNegativeInteger(0.1, {})).toBeFalsy()
    expect(isNegativeInteger(1.1, {})).toBeFalsy()
    expect(isNegativeInteger(10.1, {})).toBeFalsy()
  })

  test('pass the not number', ()=>{
    expect(isNegativeInteger('0' as unknown as number, {})).toBeFalsy()
    expect(isNegativeInteger('1' as unknown as number, {})).toBeFalsy()
    expect(isNegativeInteger('10' as unknown as number, {})).toBeFalsy()
  })
})