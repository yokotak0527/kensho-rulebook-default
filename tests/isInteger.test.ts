import isInteger from '../src/isInteger'

describe('isInteger', () => {
  test('true : pass the positive integer', ()=>{
    expect(isInteger(1)).toBeTruthy()
  })

  test('true : pass the negative integer', ()=>{
    expect(isInteger(-1)).toBeTruthy()
  })

  test('pass the 1.0', ()=>{
    // JavaScript is 1.0 === 1 :(
    expect(isInteger(1.0)).toBeTruthy()
  })

  test('false : pass the not number', ()=>{
    expect(isInteger('1')).toBeFalsy()
  })

  test('false : pass the decimal', ()=>{
    expect(isInteger(1.1)).toBeFalsy()
  })
})