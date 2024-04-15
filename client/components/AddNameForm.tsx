import { useState, createContext, useContext } from 'react'
import { useAddPlayer, useGetAllPlayers } from '../hooks/usePlayer'
import { useSearchParams } from 'react-router-dom'

interface AddNameFormProps {
  selectedGameMode: string
}

export default function AddNameForm({ selectedGameMode }: AddNameFormProps) {
  // const { data } = useGetAllPlayers()
  const [searchParams] = useSearchParams()
  const addMutation = useAddPlayer()
  const [newName, setNewName] = useState('')
  // const [selectedGameModeId, setSelectedGameModeId] = useState<number>(0)

  const newScore = useContext(ScoreContext)

  const score = Number(searchParams.get('score'))
  let selectedGameModeId: number
  if (selectedGameMode === 'Classic 1 Minute') {
    return (selectedGameModeId = 1)
  } else if (selectedGameMode === 'Classic 2 Minute') {
    return (selectedGameModeId = 2)
  } else if (selectedGameMode === 'Classic 3 Minute') {
    return (selectedGameModeId = 3)
  }

  // console.log(selectedGameMode)

  // switch (selectedGameMode) {
  //   case 'Classic 1 Minute':
  //     selectedGameModeId = 1
  //     break
  //   case 'Classic 2 Minute':
  //     selectedGameModeId = 2
  //     break
  //   case 'Classic 3 Minute':
  //     selectedGameModeId = 3
  //     break
  //   default:
  //     selectedGameModeId = 0
  // }

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
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
