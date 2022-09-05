import React from 'react'
import { useState } from 'react'

const Country = ( {country, countryFilter, filteredCountries} ) => {
  const [showView, setShowView] = useState(false)
  
  if(filteredCountries.length === 1) {
    return (
      <>
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital}</p>
        <p>Area {country.area}</p>
        <b>Languages:</b>
        <ul>
          {Object.entries(country.languages).map(([key, value], i) => (
            <li key={i}>{value}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt='flag'/>
      </>
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
          <>
            <h1>{country.name.common}<button onClick={() => setShowView(false)}>Hide</button></h1>
            <p>Capital {country.capital}</p>
            <p>Area {country.area}</p>
            <b>Languages:</b>
            <ul>
              {Object.entries(country.languages).map(([key, value], i) => (
                <li key={i}>{value}</li>
              ))}
            </ul>
            <img src={country.flags.png} alt='flag'/>
          </>
        )
  }}

export default Country;