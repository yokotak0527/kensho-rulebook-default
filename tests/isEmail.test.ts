import isEmail from '../src/isEmail'

describe('isEmail', ()=>{
  test('pass a valid email address', ()=>{
    expect(isEmail('hoge@hoge.com')).toBeTruthy()
  })

  test('pass a invalid email address', ()=>{
    expect(isEmail('hogehoge')).toBeFalsy()
    expect(isEmail('hoge@hoge')).toBeFalsy()
    expect(isEmail('hoge@hoge.a')).toBeFalsy()
  })

  test('pass a not string', ()=>{
    expect(isEmail(123 as unknown as string)).toBeFalsy()
  })
})