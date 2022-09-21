import { useState, useEffect } from 'react'
import personServices from './services/persons'
import Person from './components/Person'
import Filter from './components/Filter'
import New from './components/New'
import Notification from './components/Notification'


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [message, setMessage] = useState(null)
  

  const resetState = async () => {
    await setNewName('')
    await setNewNumber('')
  }

  useEffect(() => {
    personServices
      .getAll()
      .then(personList => {
        setPersons(personList)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    
    const matchingEntry = persons.filter((person) => person.name === newName) 
    console.log('matching entry', matchingEntry[0])
    // find if there is a prexisting record in the persons list with the same name as the new entry
    
    const personToUpdate = matchingEntry[0]
    console.log('person to update', personToUpdate)
    // assign matching entry to new variable to remove use of [0], index notation from here on creates problems
    
    const updatedPerson = { ...personToUpdate, number: newNumber }
    console.log('updated person', updatedPerson)
    // save existing attributes (state) of personToUpdate to the new updatedPerson, albeit with an updated number taken from the user input newNumber

  if (newName.length === 0 || newNumber.length === 0) {
    alert('Missing field(s)')
    resetState();
    event.target.reset();
    
  } else if (matchingEntry.length !== 0 && personToUpdate.number !== newNumber) {
      if (window.confirm(`${personToUpdate.name} is already added to the phonebook, replace the old number with a new one?`)) {
      personServices
          .update(personToUpdate.id, updatedPerson)
          .then(updatedPersonResponse => {
            console.log(updatedPersonResponse)
            setPersons(persons.map(entry => entry.id === updatedPerson.id ? updatedPersonResponse : entry))
            resetState();
            event.target.reset();
            setMessage(
              `Changed number for ${updatedPerson.name}`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
          .catch(error => {
            console.log(error)
            setPersons(persons.filter(person => person.id !== updatedPerson.id))
            resetState()
            event.target.reset()
            setMessage(
              `Information of ${updatedPerson.name} has already been removed from the server`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)  
            })
        }
  
  } else if (matchingEntry.length !== 0 && personToUpdate.number === newNumber) {
      alert(`${personToUpdate.name} and ${personToUpdate.number} already in phonebook`)
      resetState();
      event.target.reset();
  
  } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
        personServices
          .add(newPerson)
          .then(newPersonData => {
            setPersons(persons.concat(newPersonData))
            resetState();
            event.target.reset();
            setMessage(
              `Added ${newPerson.name}`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
      })
    }}
  
  const deletePerson = (id) => {
    const personToBeDeleted = persons.filter(person => person.id === id)
    if (window.confirm(`Delete ${personToBeDeleted[0].name} ?`)) {
      personServices
        .remove(id)
        (setPersons(persons.filter(person => person.id !== personToBeDeleted[0].id)))
          .then(response => {
            console.log(response)
        })
          
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
      <Notification message={message} />
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
          <Person key={person.id} person={person} deletePerson={deletePerson}/>
        )}
    </div>
  )
}

export default App;
