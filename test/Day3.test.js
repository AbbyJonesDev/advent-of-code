import validTriangles from '../src/Day3'
import { expect } from 'chai'

describe('validTriangles', () => {
  it('returns 0 for one set of invalid numbers', () => {
    const result = validTriangles([5, 10, 25])
    expect(result).to.equal(0)
  })
})
