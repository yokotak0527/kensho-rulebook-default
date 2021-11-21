import isZero from '../src/isZero'

describe('isZero', ()=>{
  test('pass the 0', ()=>{
    expect(isZero(0)).toBeTruthy()
  })

  test('pass the number other than 0', ()=>{
    expect(isZero(1)).toBeFalsy()
  })

  test('pass the not number', ()=>{
    expect(isZero('a' as unknown as number)).toBeFalsy()
    expect(isZero(null as unknown as number)).toBeFalsy()
    expect(isZero({} as unknown as number)).toBeFalsy()
  })
})