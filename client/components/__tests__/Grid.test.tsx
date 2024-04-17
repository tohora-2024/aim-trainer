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
import { render, act, fireEvent, cleanup } from '@testing-library/react/pure'
import Grid from '../Grid'

beforeAll(() => {
  nock.disableNetConnect()
})

beforeEach(() => {
  cleanup()
})

afterEach(() => {
  vi.clearAllMocks()
})

describe('GameGrid Component', () => {
  it('Renders the timer for 1 minute long', async () => {
    const screen = render(
      <MemoryRouter>
        <Grid onStartGame={() => {}} duration={60000} selectedGameMode="1" />
      </MemoryRouter>,
    )
    expect(screen.getByText('1:00')).toBeTruthy()
  })
  it('Renders the timer for 2 minutes long', async () => {
    const screen = render(
      <MemoryRouter>
        <Grid onStartGame={() => {}} duration={120000} selectedGameMode="2" />
      </MemoryRouter>,
    )
    expect(screen.getByText('2:00')).toBeTruthy()
  })
  it('Renders the timer for 3 minutes long', async () => {
    const screen = render(
      <MemoryRouter>
        <Grid onStartGame={() => {}} duration={180000} selectedGameMode="3" />
      </MemoryRouter>,
    )
    expect(screen.getByText('3:00')).toBeTruthy()
  })
  it('Should start the timer on a click function', async () => {
    const screen = render(
      <MemoryRouter>
        <Grid onStartGame={() => {}} duration={60000} selectedGameMode="1" />
      </MemoryRouter>,
    )

    const startButton = screen.getByText('Start Timer')
    expect(screen.getByText('1:00')).toBeTruthy()

    await act(async () => {
      fireEvent.click(startButton)
    })

    expect(await screen.findByText('0:59')).toBeTruthy()
  })
  // it('Should clear a target cell when clicked', async () => {
  //   // ARRANGE
  //   const screen = render(
  //     <MemoryRouter>
  //       <Grid onStartGame={() => {}} duration={60000} selectedGameMode="1" />
  //     </MemoryRouter>,
  //   )
  //   // ACT
  //   const hit = screen.getByTab('grid')
  //   expect(screen.getByText('0')).toBeTruthy()

  //   await act(async () => {
  //     fireEvent.click(hit)
  //   })

  //   screen.debug()
  //   // ASSERT
  //   expect(screen.getByText('1')).toBeTruthy()
  // })
})

// const handleCellClick = (row: number, col: number) => {
//   if (!timerStarted) {
//     return
//   }
//   if (targetCell.row === row && targetCell.col === col) {
//     const newTargetCell = getRandomCell()
//     setTargetCell(newTargetCell)
//     setHitCount(hitCount + 1)
//     hitCountRef.current++
//     onStartGame()
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
