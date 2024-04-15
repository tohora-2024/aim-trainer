import { useState } from 'react'
import { useAddPlayer } from '../hooks/usePlayer'
import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// interface AddNameFormProps {
//   selectedGameMode: string
// }

export default function AddNameForm(/*{ selectedGameMode }: AddNameFormProps*/) {
  // const { data } = useGetAllPlayers()
  const addMutation = useAddPlayer()
  const [newName, setNewName] = useState('')
  const location = useLocation()
  const [selectedGameModeId, setSelectedGameModeId] = useState<number>(0)

  // const newScore = useContext(ScoreContext)

  // const selectedGameModeLocation = location.state.selectedGameMode

  // if (selectedGameModeLocation === 'Classic 1 Minute') {
  //   return setSelectedGameModeId(1)
  // }
  // } else if (selectedGameModeLocation === 'Classic 2 Minute') {
  //   return setSelectedGameModeId(2)
  // } else if (selectedGameModeLocation === 'Classic 3 Minute') {
  //   return setSelectedGameModeId(3)
  // }

  // console.log(location)
  // console.log(selectedGameModeLocation)

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
      score: location.state.hitCount,
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
