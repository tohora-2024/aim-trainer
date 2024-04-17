import { useState } from 'react'
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
  const gamemodeId = location.state.selectedGameMode

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }

  function timeString(time: { minutes: number; seconds: number }) {
    return `${time.minutes} Minutes ${time.seconds} Seconds`
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const player = {
      name: newName,
      score: score,
      time: time,
      gamemodeId: location.state.selectedGameMode,
    }

    if (gamemodeId === '4' && time) {
      player.time = timeString(time)
    }

    try {
      addMutation.mutate(player)
      setNewName('')

      clicked = true
      if (clicked === true) {
        setTimeout(() => {
          navigate(`/leaderboard/${id}`)
        }, 500)
      }
    } catch (error) {
      console.error('error in handlesubmit', error)
    }
    return
  }

  return (
    <>
      <div className="form-container">
        <h2>Your score: {score}</h2>
        {gamemodeId === '4' && (
          <h3>
            Time Taken: {time.minutes} Minutes {time.seconds} Seconds
          </h3>
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
