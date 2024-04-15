import { useState } from 'react'
import { useAddPlayer } from '../hooks/usePlayer'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function AddNameForm() {
  const { id } = useParams()
  const addMutation = useAddPlayer()
  const [newName, setNewName] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const scoreDisplay = location.state.hitCount
  let clicked = false

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const player = {
      name: newName,
      score: location.state.hitCount,
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
        <h2>Your score: {scoreDisplay}</h2>
        <h3 className="form-title">Add Your Name</h3>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter Name</label>
            <input
              onChange={handleName}
              placeholder="Name"
              value={newName}
              id="name"
            />
            <button type="submit">Add Me To Leaderboard!</button>
          </form>
        </div>
      </div>
    </>
  )
}
