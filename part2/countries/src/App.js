import { useState, useEffect} from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {
  
  const [countries, setCountries] = useState([])
  // const [weather, setWeather] = useState([])
  const [countryFilter, setCountryFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryData = []
        for (let i = 0; i < response.data.length; i ++)
        countryData.push(response.data[i])
        setCountries(countryData)
      })
  }, [])

  

  
  const filteredCountries = countries.filter(country => {
    return country.name.common.toLocaleLowerCase().includes(countryFilter.toLocaleLowerCase())
  })
  
  const handleCountrySearch = (event) => {
    setCountryFilter(event.target.value)
  }

  return (
    <div>
      <form>
        <div>
          Find Countries: <input id='countrySearchBar' onChange={handleCountrySearch} />
        </div>
      </form>
        <div>
           {filteredCountries.map(country =>
            <Country key={country.name.common} country={country} countryFilter={countryFilter} filteredCountries={filteredCountries}/>
          )}
        </div>
    </div>
  )
}

export default App;

// const countryWeather = []
//         for(let i = 0; i < response.data.length; i++)
//         countryWeather.push(response.data[i])
//         console.log(countryWeather)
//         setWeather(countryWeather)