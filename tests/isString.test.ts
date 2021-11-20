import isString from '../src/isString'

describe('isString', ()=>{
  test('pass the string', ()=>{
    expect(isString('string')).toBeTruthy()
  })

  test('pas the not string', ()=>{
    expect(isString(1)).toBeFalsy()
  })
})