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

const Average = () => {

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setFeedback] = useState([])

  const goodClick = () => {
    setGood(good + 1)
    setFeedback(allFeedback.concat(1))
    console.log(allFeedback)
  }
  
  const neutralClick = () => {
    setNeutral(neutral + 1)
    setFeedback(allFeedback.concat(0))
    console.log(allFeedback)

  }
  
  const badClick = () => {
    setBad(bad + 1)
    setFeedback(allFeedback.concat(-1))
    console.log(allFeedback)
  }
  const feedbackTotal = good + neutral + bad
  const feedbackAverage = allFeedback.reduce((a, b) => a + b, 0) / allFeedback.length
  const positivePercentage = good / (good + neutral + bad) 

  return (
    <div>
      <h2>Give Feedback</h2>
        <Button feedbackChange={goodClick} name='good'/>
        <Button feedbackChange={neutralClick} name='neutral'/>
        <Button feedbackChange={badClick} name='bad'/>
      <h2>Statistics</h2>
        <div>
          Good {good} <br></br>
          Neutral {neutral} <br></br>
          Bad {bad} <br></br>
          All {feedbackTotal} <br></br>
          Average {feedbackAverage} <br></br>
          Positive {positivePercentage}%
        </div>
    </div>
  )
}

export default App;