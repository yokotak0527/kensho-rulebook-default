import isNumber from '../src/isNumber'

describe('isNumber', ()=>{
  test('pass the number', ()=>{
    expect(isNumber(1)).toBeTruthy()
  })

  test('pass the NaN', ()=>{
    expect(isNumber(NaN)).toBeFalsy()
  })

  test('pass the not number', ()=>{
    expect(isNumber('1' as unknown as number)).toBeFalsy()
  })
})