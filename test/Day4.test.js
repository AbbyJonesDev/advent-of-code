import { isReal, sumSectorIds } from '../src/Day4'
import { expect } from 'chai'

describe('isReal', () => {
  it('returns true for aaaaa-bbb-z-y-x-123[abxyz]', () => {
    const result = isReal('aaaaa-bbb-z-y-x-123[abxyz]')
    expect(result).to.be.true
  })

  it('returns true for a-b-c-d-e-f-g-h-987[abcde]', () => {
    const result = isReal('a-b-c-d-e-f-g-h-987[abcde]')
    expect(result).to.be.true
  })

  it('returns false for not-a-real-room-404[oarel]', () => {
    const result = isReal('not-a-real-room-404[oarel]')
    expect(result).to.be.false
  })

  it('returns false for totally-real-room-200[decoy]', () => {
    const result = isReal('totally-real-room-200[decoy]')
    expect(result).to.be.false
  })
})

describe('sumSectorIds', () => {
  it('returns 1514 for example list', () => {
    const list = [
      'aaaaa-bbb-z-y-x-123[abxyz]',
      'a-b-c-d-e-f-g-h-987[abcde]',
      'not-a-real-room-404[oarel]',
      'totally-real-room-200[decoy]'
    ]
    const result = sumSectorIds(list)
    expect(result).to.equal(1514)
  })  
})
