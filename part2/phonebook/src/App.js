import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import New from './components/New'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    console.log('Start effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('Promise fulfilled');
        setPersons(response.data)
      })
  }, [])

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
           <Filter handleNameSearch={handleNameSearch} />
        </div>
      </form>
      <form onSubmit={addPerson}>
        <div>
            <New handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
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
