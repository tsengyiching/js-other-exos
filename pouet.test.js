const { pouet, pouet2 } = require('./pouet.js')

describe('pouet test', () => {
  test('calling pouet return 12', () => {
	  expect(pouet()).toBe(12)
  })
  test('calling pouet return 42', () => {
    expect(pouet2()).toBe(0)
  })
})
