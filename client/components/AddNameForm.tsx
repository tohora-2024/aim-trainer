import { useEffect, useState } from 'react'
import { useAddPlayer } from '../hooks/useHooks.ts'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function AddNameForm() {
  const { id } = useParams()
  const addMutation = useAddPlayer()
  const [newName, setNewName] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const score = location.state.hitCount
  let clicked = false
  const time = location.state.elapsedTime
  const [isVisible, setIsVisible] = useState(true)

  // function timeTakenVisibility(selectedGameMode: number) {
  //   setIsVisible(selectedGameMode === 4)
  // }

  useEffect(() => {
    setIsVisible(location.state.selectedGameMode === 4)
  }, [location.state.selectedGameMode])

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    function timeString(time: any) {
      return `${time.minutes} Minutes ${time.seconds} Seconds`
    }

    const player = {
      name: newName,
      score: score,
      time: timeString(time),
      gamemodeId: location.state.selectedGameMode,
    }
    addMutation.mutate(player)
    setNewName('')
    clicked = true
    if (clicked === true) {
      setTimeout(() => {
        navigate(`/leaderboard/${id}`)
      }, 500)
    }
    return
  }

  console.log(time)

  return (
    <>
      <div className="form-container">
        <h2>Your score: {score}</h2>
        {isVisible && (
          <h2 className="hidden">
            Time Taken: {time.minutes} Minutes {time.seconds} Seconds
          </h2>
        )}
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label">
              Enter Name
            </label>
            <br />
            <input
              onChange={handleName}
              placeholder="Name"
              value={newName}
              id="name"
              className="textbox"
              required
            />
            <button type="submit">Add To Leaderboard!</button>
          </form>
        </div>
      </div>
    </>
  )
}
