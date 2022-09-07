import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const View = ( {country} ) => {
  const [temperature, setTemperature] = useState([])
  const [wind, setWind] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.open-meteo.com/v1/forecast?latitude=${country.capitalInfo.latlng[0]}&longitude=${country.capitalInfo.latlng[1]}&windspeed_unit=ms&current_weather=true`)
      .then(response => {
        setTemperature(response.data.current_weather.temperature)
        setWind(response.data.current_weather.windspeed)
      })
  }, [])
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
      <h2>Weather in {country.capital}</h2>
      <p>Temperature {temperature} Celsius</p>
      <p>Wind {wind} m/s</p>
      
    </>
  )
}

export default View;

