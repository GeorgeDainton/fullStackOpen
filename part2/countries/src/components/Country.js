import React from 'react'

const Country = ( {country, countryFilter, filteredCountries} ) => {
  
  if(filteredCountries.length === 1) {
    return (
      <>
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital}</p>
        <p>Area {country.area}</p>
        <b>Languages:</b>
        <ul>
          {Object.entries(country.languages).map(([key, value], i) => (
            <li key={country.name.common}>{value}</li>
          ))}
        </ul>
       
        <img src={country.flags.svg} alt='flag'/>
      </>
    
        
    )
  } else if(countryFilter.length !== 0 && filteredCountries.length > 10) {
    return (
      <p>{'Too many matches, be more specific'}</p>
    )
  } else if(countryFilter.length !== 0) {
      return (
        <p>{country.name.common}</p>
    )
  }}

export default Country;