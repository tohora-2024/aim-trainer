//@vitest-environment jsdom
import {
  describe,
  it,
  expect,
  beforeAll,
  afterEach,
  vi,
  beforeEach,
} from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import nock from 'nock'
import { render, cleanup } from '@testing-library/react/pure'
import Leaderboard from '../Leaderboard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const mockLeaderboard = [
  { id: 1, name: 'Joel', score: 1, time_taken: '', gamemode_id: 1 },
  { id: 2, name: 'Jess', score: 10, time_taken: '', gamemode_id: 1 },
  { id: 3, name: 'Boston', score: 20, time_taken: '', gamemode_id: 1 },
]
beforeAll(() => {
  nock.disableNetConnect()
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

beforeEach(() => {
  cleanup()
})

afterEach(() => {
  vi.clearAllMocks()
})

describe('<Leaderboard/>', () => {
  it('Should show a leaderboard', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/join?gamemodeId=1')
      .reply(200, mockLeaderboard)
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    })
    const screen = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/leaderboard']}>
          <Leaderboard />
        </MemoryRouter>
        ,
      </QueryClientProvider>,
    )

    const leaderboardTitle = screen.getByText(/LEADERBOARD/i)

    expect(leaderboardTitle).toBeTruthy()
    expect(mockLeaderboard[0].name).toBe('Joel')
    expect(mockLeaderboard[2].gamemode_id).toBe(1)
    expect(mockLeaderboard[1].score).toBe(10)
  })
})
