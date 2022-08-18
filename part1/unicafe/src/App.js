import { useState } from 'react'

const Button = ({ feedbackChange, name}) => {
  return (
    <div>
      <button onClick={feedbackChange}>
        {name}
      </button>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }
  
  const neutralClick = () => {
    setNeutral(neutral + 1)
  }
  
  const badClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
        <Button feedbackChange={goodClick} name='good'/>
        <Button feedbackChange={neutralClick} name='neutral'/>
        <Button feedbackChange={badClick} name='bad'/>
     <h2>Statistics</h2>
        Good {good} <br></br>
        Neutral {neutral} <br></br>
        Bad {bad}
    </div>
  )
}

export default App;