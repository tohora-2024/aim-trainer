//@vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import nock from 'nock'
import { render, screen, act } from '@testing-library/react'
import Grid from '../Grid'

beforeAll(() => {
  nock('http://example.com')
    .get('/leaderboard')
    .reply(200, { data: 'Leaderboard data' })
})

describe('GameGrid Component', () => {
  it('renders the timer for 1 minute long', async () => {
    render(
      <MemoryRouter>
        <Grid onStartGame={() => {}} duration={60000} selectedGameMode="1" />
      </MemoryRouter>,
    )
    expect(screen.getByText('1:00')).toBeTruthy()
  })
  it('renders the timer for 2 minutes long', async () => {
    render(
      <MemoryRouter>
        <Grid onStartGame={() => {}} duration={120000} selectedGameMode="2" />
      </MemoryRouter>,
    )
    expect(screen.getByText('2:00')).toBeTruthy()
  })
  it('renders the timer for 3 minutes long', async () => {
    render(
      <MemoryRouter>
        <Grid onStartGame={() => {}} duration={180000} selectedGameMode="3" />
      </MemoryRouter>,
    )
    expect(screen.getByText('3:00')).toBeTruthy()
  })
})

//START BUTTON CLICK FUNCTION
// const handleStartButtonClick = () => {
//   if (!timerStarted) {
//     setTimerStarted(true)
//   }
// }

// GET RANDOM CELL FUNCTION
// const getRandomCell = () => {
//   const randomRow = Math.floor(Math.random() * numRows)
//   const randomCol = Math.floor(Math.random() * numCols)
//   return { row: randomRow, col: randomCol }
// }

// USE EFFECT
// useEffect(() => {
//   let interval: NodeJS.Timeout | null = null

//   if (timerStarted) {
//     interval = setInterval(() => {
//       setTimeLeft((prevTimeLeft) => {
//         if (prevTimeLeft <= 0) {
//           clearInterval(interval as NodeJS.Timeout)
//           navigate(`/add-score/${selectedGameMode}`, {
//             state: { hitCount: hitCountRef.current, selectedGameMode },
//           })
//           return 0
//         }
//         return prevTimeLeft - 1000
//       })
//     }, 1000)
//   }

//   return () => {
//     if (interval) clearInterval(interval)
//   }
// }, [timerStarted, navigate, selectedGameMode, duration, hitCountRef])
