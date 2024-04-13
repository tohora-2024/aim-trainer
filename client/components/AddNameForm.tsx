import { useState } from 'react'
import { useAddPlayer, useGetAllPlayers } from '../hooks/usePlayer'

interface AddNameFormProps {
  score: number
}

export default function AddNameForm({ score }: AddNameFormProps) {
  // const { data } = useGetAllPlayers()
  const addMutation = useAddPlayer()
  const [newName, setNewName] = useState('')
  const [selectedGameMode, setSelectedGameMode] = useState<number>(0)

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const player = {
      name: newName,
      score: score,
      gamemodeId: selectedGameMode,
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
