import React from 'react'
import View from './View'
import { useState } from 'react'

const Country = ( {country, countryFilter, filteredCountries} ) => {
  const [showView, setShowView] = useState(false)
  
  if(filteredCountries.length === 1) {
    return (
      <View country={country}/>
    )
  } else if(countryFilter.length !== 0 && filteredCountries.length > 10) {
    return (
      <p>{'Too many matches, be more specific'}</p>
    )
  } else if(countryFilter.length !== 0 && showView === false) {
      return (
        <>
          <p>{country.name.common}<button onClick={() => setShowView(true)}>Show</button></p>
        </>
    )
  } else if(countryFilter.length !== 0 && showView === true) {
      return (
         <View country={country}/>
    )
  }}
export default Country;