const Filter = ( {handleNameSearch} ) => {
  return (
    <>
      Filter Names:
      <input onChange={handleNameSearch} />
    </>
  )
}

export default Filter;