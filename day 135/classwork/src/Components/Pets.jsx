import { useState } from 'react'

function Pets() {
  const [pets, setPets] = useState([])

  const [name, setName] = useState("")

  const [type, setType] = useState("")

  function addPet() {
    const newPet = { id: Date.now(), name: name, type: type }

    setPets([...pets, newPet])

    setName("")
    setType("")
  }

  function deletePet(id) {
    const newList = pets.filter((pet) => pet.id !== id)

    setPets(newList)
  }

  function renamePet(id) {
    const newList = pets.map((pet) => {
      if (pet.id === id) {
        return { ...pet, name: "Unknown" }
      }
      return pet
    })

    setPets(newList)
  }

  return (
    <div>
      <h1>My Pets</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />

      <button onClick={addPet}>Add Pet</button>

      {pets.map((pet) => (
        <p key={pet.id}>
          {pet.name} - {pet.type}

          <button onClick={() => deletePet(pet.id)}>Delete</button>

          <button onClick={() => renamePet(pet.id)}>Rename</button>
        </p>
      ))}
    </div>
  )
}

export default Pets
