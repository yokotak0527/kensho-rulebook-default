import equal from '../src/equal'

describe('equal', ()=>{
  test('pass the same value', ()=>{
    expect(equal(1, { isSame : 1 })).toBeTruthy()
    expect(equal('', { isSame : '' })).toBeTruthy()
    expect(equal([1], { isSame : [1] })).toBeTruthy()
    expect(equal({ a : 1 }, { isSame : { a : 1 } })).toBeTruthy()
    expect(equal(new Int16Array([1, 2]), { isSame : new Int16Array([1, 2]) })).toBeTruthy()
    expect(equal(undefined, { isSame : undefined })).toBeTruthy()
  })

  test('pass the not same value', ()=>{
    expect(equal(1, { isSame : 2 })).toBeFalsy()
    expect(equal('', { isSame : 'a' })).toBeFalsy()
    expect(equal([1], { isSame : [2] })).toBeFalsy()
    expect(equal({ a : 1 }, { isSame : { a : 2 } })).toBeFalsy()
    expect(equal(new Int16Array([1, 2]), { isSame : new Int16Array([2, 3]) })).toBeFalsy()
    expect(equal(undefined, { isSame : null })).toBeFalsy()
  })
})