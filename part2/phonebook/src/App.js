import { useState } from 'react'
import Person from './components/Person'

const App = (props) => {

  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
    }
    for (let i = 0; i < persons.length; i++) {
      if(JSON.stringify(personObject.name) === JSON.stringify(persons[i].name)) {
        alert(`${personObject.name} is already added to the phonebook`)
        break
      } else {
        setPersons([...persons].concat(personObject))
        setNewName('')
      }
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => 
          <Person key={person.name} person={person}/>
        )}
    </div>
  )



}

export default App;
