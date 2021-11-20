import regexp from '../src/regexp'

describe('regexp', ()=>{
  test('pass the match value', ()=>{
    expect(regexp('a', { regexp : /a/ })).toBeTruthy()
  })

  test('not pass `option.regexp`', ()=>{
    expect(regexp('a', {})).toBeTruthy()
  })

  test('pass not string', ()=>{
    expect(regexp(1 as unknown as string, { regexp : /a/ })).toBeFalsy()
  })
})