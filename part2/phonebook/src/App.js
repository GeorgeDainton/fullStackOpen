import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import New from './components/New'


const App = () => {

  const [persons, setPersons] = useState([])
  const names = persons.map(person => {
    return person.name.toLocaleLowerCase()
  })
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
    if (names.includes(personObject.name.toLocaleLowerCase())) {
    alert(`${personObject.name} is already added to the phonebook`)
    } else if (newName === '') {
    alert('Name field empty')
    } else {
      axios.post('http://localhost:3001/persons', personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          event.target.reset();
        })
      }}
  
  const deletePerson = (id) => {
    const personToBeDeleted = persons.filter(person => person.id === id)
    if (window.confirm(`Delete ${personToBeDeleted[0].name} ?`)) {
      axios.delete(`http://localhost:3001/persons/${id}`)
      setPersons(persons.filter(person => person.id !== personToBeDeleted[0].id))
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
          <Person key={person.name} person={person} deletePerson={deletePerson}/>
        )}
    </div>
  )
}

export default App;
