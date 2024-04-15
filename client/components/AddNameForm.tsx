import { useState } from 'react'
import { useAddPlayer } from '../hooks/usePlayer'
import { useLocation } from 'react-router-dom'

export default function AddNameForm() {
  const addMutation = useAddPlayer()
  const [newName, setNewName] = useState('')
  const location = useLocation()

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
  }

  return (
    <>
      <h3>Add Your Name</h3>
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
    </>
  )
}
