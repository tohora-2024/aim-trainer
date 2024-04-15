import { useState } from 'react'
import { useAddPlayer } from '../hooks/usePlayer'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function AddNameForm() {
  const { id } = useParams()
  const addMutation = useAddPlayer()
  const [newName, setNewName] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const score = location.state.hitCount
  let clicked = false

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const player = {
      name: newName,
      score: score,
      gamemodeId: location.state.selectedGameMode,
    }
    addMutation.mutate(player)
    setNewName('')
    clicked = true
    if (clicked === true) {
      setTimeout(() => {
        navigate(`/leaderboard/${id}`)
      }, 10)
    }
    return
  }

  return (
    <>
      <div className="form-container">
        <h2>Your score: {score}</h2>
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
            />
            <button type="submit">Add To Leaderboard!</button>
          </form>
        </div>
      </div>
    </>
  )
}
