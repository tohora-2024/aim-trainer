import { useState } from 'react'
import { useAddPlayer, useGetAllPlayers } from '../hooks/usePlayer'

export default function AddNameForm() {
  // const { data } = useGetAllPlayers()
  const addMutation = useAddPlayer()
  const [newName, setNewName] = useState('')
  const [selectedGameModeId, setSelectedGameModeId] = useState<number>(0)
  const [score, setScore] = useState<number>(0)

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }

  const handleScore = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScore(parseInt(event.target.value))
  }

  const handleGameModeId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGameModeId(parseInt(event.target.value))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const player = {
      name: newName,
      score: score,
      gamemodeId: selectedGameModeId,
    }
    addMutation.mutate(player)
    setNewName('')
    setScore(0)
    setSelectedGameModeId(0)
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
          <label htmlFor="score">Score</label>
          <input
            onChange={handleScore}
            placeholder="Score"
            value={score}
            id="score"
          />
          <label htmlFor="gamemodeid">GMID</label>
          <input
            onChange={handleGameModeId}
            placeholder="Game Mode Id"
            value={selectedGameModeId}
            id="gamemodeId"
          />
          <button type="submit">Add Me To Leaderboard!</button>
        </form>
      </div>
    </>
  )
}
