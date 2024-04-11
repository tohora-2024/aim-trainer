//@vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import nock from 'nock'
import GameGrid from '../game-grid'
import { render, screen, act } from '@testing-library/react'

beforeAll(() => {
  nock('http://example.com')
    .get('/leaderboard')
    .reply(200, { data: 'Leaderboard data' })
})

describe('GameGrid Component', () => {
  it('renders the component correctly', async () => {
    render(
      <MemoryRouter>
        <GameGrid onStartGame={() => {}} />
      </MemoryRouter>,
    )
    expect(screen.getByText('1:00')).toBeTruthy()
  })
})
