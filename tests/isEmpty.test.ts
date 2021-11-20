import isEmpty from '../src/isEmpty'

describe('isEmpty', ()=>{
  test('pass support types', ()=>{
    expect(isEmpty('')).toBeTruthy()
    expect(isEmpty(undefined)).toBeTruthy()
    expect(isEmpty(null)).toBeTruthy()
    expect(isEmpty([])).toBeTruthy()
    expect(isEmpty({})).toBeTruthy()
  })

  test('pass not empty types', ()=>{
    expect(isEmpty('a')).toBeFalsy()
    expect(isEmpty([1])).toBeFalsy()
    expect(isEmpty({a:1})).toBeFalsy()
  })

  test('pass not support types', ()=>{
    expect(isEmpty(1)).toBeFalsy()
    expect(isEmpty(true)).toBeFalsy()
    expect(isEmpty(false)).toBeFalsy()
    expect(isEmpty(Symbol('foo'))).toBeFalsy()
  })
})