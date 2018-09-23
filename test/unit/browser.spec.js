import Browser from '../../src/js/browser'

describe('Browser', () => {
  it('has a function named isFirefox that returns a boolean value', () => {
    expect(typeof Browser.isFirefox).toBe('function')
    expect(typeof Browser.isFirefox()).toBe('boolean')
  })

  it('has a function named isIE that returns a boolean value', () => {
    expect(typeof Browser.isIE).toBe('function')
    expect(typeof Browser.isIE()).toBe('boolean')
  })

  it('has a function named isEdge that returns a boolean value', () => {
    expect(typeof Browser.isEdge).toBe('function')
    expect(typeof Browser.isEdge()).toBe('boolean')
  })

  it('has a function named isChrome that returns a boolean value', () => {
    expect(typeof Browser.isChrome).toBe('function')
    expect(typeof Browser.isChrome()).toBe('boolean')
  })

  it('has a function named isSafari that returns a boolean value', () => {
    expect(typeof Browser.isSafari).toBe('function')
    expect(typeof Browser.isSafari()).toBe('boolean')
  })
})
