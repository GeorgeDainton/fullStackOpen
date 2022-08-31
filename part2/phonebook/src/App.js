import { useState } from 'react'
import Number from './components/Number'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input onChange={handleNameChange} placeholder="..." />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <table>
      <h2>Numbers</h2>
        {persons.map(person =>
          <Number key={person.id} person={person}/>
        )}
      </table>
    </div>
  )
}

export default App;
