//@vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import nock from 'nock'
import GameGrid from '../Grid'
import { render, screen, act } from '@testing-library/react'

beforeAll(() => {
  nock('http://example.com')
    .get('/leaderboard')
    .reply(200, { data: 'Leaderboard data' })
})

describe('GameGrid Component', () => {
  it('renders the timer for 1 minute long', async () => {
    render(
      <MemoryRouter>
        <GameGrid onStartGame={() => {}} duration={60000} />
      </MemoryRouter>,
    )
    expect(screen.getByText('1:00')).toBeTruthy()
  })
  it('renders the timer for 2 minutes long', async () => {
    render(
      <MemoryRouter>
        <GameGrid onStartGame={() => {}} duration={120000} />
      </MemoryRouter>,
    )
    expect(screen.getByText('2:00')).toBeTruthy()
  })
  it('renders the timer for 3 minutes long', async () => {
    render(
      <MemoryRouter>
        <GameGrid onStartGame={() => {}} duration={180000} />
      </MemoryRouter>,
    )
    expect(screen.getByText('3:00')).toBeTruthy()
  })
})
