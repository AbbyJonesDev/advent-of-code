import blocksAway from '../src/Day1'
import { expect } from 'chai'

describe('blocksAway', () => {
  it('returns correct value for "R2, L3"', () => {
    const result = blocksAway("R2, L3")
    expect(result).to.equal(5)
  })

  it('returns correct value for "R2, R2, R2"', () => {
    const result = blocksAway("R2, R2, R2")
    expect(result).to.equal(2)
  })

  it('returns correct value for "R5, L5, R5, R3"', () => {
    const result = blocksAway("R5, L5, R5, R3")
    expect(result).to.equal(5)
  })

})
