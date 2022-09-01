import { useState } from 'react'
import Person from './components/Person'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    for (let i = 0; i < persons.length; i++) {
      if(JSON.stringify(personObject.name) === JSON.stringify(persons[i].name)) {
        alert(`${personObject.name} is already added to the phonebook`)
        break
      } else {
        setPersons([...persons].concat(personObject))
      }
      setNewName('')
      setNewNumber('')
    }
  }

  const filteredNames = persons.filter(person => {
      return person.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())
    })
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameSearch = (event) => {
    setNameFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Filter Names:
           <input onChange={handleNameSearch} />
        </div>
      </form>
      <form onSubmit={addPerson}>
        <div>
          <h2>Add a new:</h2>
          Name: <input onChange={handleNameChange} />
        </div>
        <div>
          Number: <input onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {filteredNames.map(person => 
          <Person key={person.name} person={person}/>
        )}
    </div>
  )
}

export default App;
