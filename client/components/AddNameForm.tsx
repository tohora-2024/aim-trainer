import { useState } from 'react'
import { useAddPlayer, useGetAllPlayers } from '../hooks/usePlayer'

export default function AddNameForm() {
  const { data } = useGetAllPlayers()
  const addMutation = useAddPlayer()
  const [newName, setNewName] = useState('')

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const player = {
      name: newName,
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
        </form>
      </div>
    </>
  )
}
