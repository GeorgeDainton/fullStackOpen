const New = ( {handleNameChange, handleNumberChange} ) => {
  return (
    <>
    <h2>Add a new:</h2>
      Name: 
      <input onChange={handleNameChange} />
      Number: 
      <input onChange={handleNumberChange} />
    </>
  )

}

export default New;