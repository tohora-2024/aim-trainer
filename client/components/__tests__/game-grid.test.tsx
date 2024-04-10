//@vitest-environment jsdom
import { describe, it, expect, beforeAll, afterEach, vi } from 'vitest'
import nock from 'nock'
import { waitForElementToBeRemoved } from '@testing-library/react'

beforeAll(() => {
  nock.disableNetConnect()
})

afterEach(() => {
  vi.clearAllMocks()
})

const mockData = []

describe('<Grid />', () => {
  it('Should display an empty div', async () => {
    // Arrange / Act
    const scope = nock('http://localhost').get('/api/v1').reply(200, mockData)
  })
})
