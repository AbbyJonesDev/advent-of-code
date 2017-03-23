import { plus } from '../src/sample.js'
import { expect } from 'chai'

describe('plus', () => {
  it("adds 2 numbers", () => {
    expect(plus(1, 2)).to.equal(3);
  })
})
