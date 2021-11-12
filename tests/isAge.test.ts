import isAge from '../src/isAge'

describe('isAge', ()=>{
  test('pass the number that valid for age', ()=>{
    expect(isAge(0, {})).toBeTruthy()
    expect(isAge(18, {})).toBeTruthy()
    expect(isAge(125, {})).toBeTruthy()
    expect(isAge(500, { max : 500 })).toBeTruthy()
  })

  test('pass the number that invalid for age', ()=>{
    expect(isAge(-1, {})).toBeFalsy()
    expect(isAge(1.1, {})).toBeFalsy()
    expect(isAge(200, {})).toBeFalsy()
  })

  test('pass the not number', ()=>{
    expect(isAge('' as unknown as number, {})).toBeFalsy()
    expect(isAge(null as unknown as number, {})).toBeFalsy()
    expect(isAge(undefined as unknown as number, {})).toBeFalsy()
  })
})