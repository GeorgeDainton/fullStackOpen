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

const Statistics = (props) => {
  return (
    <div>
      {props.statName} {props.stat} {props.char}
    </div>
  )
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
        <div>
          <h2>Give Feedback</h2>
            <Button feedbackChange={goodClick} name='good'/>
            <Button feedbackChange={neutralClick} name='neutral'/>
            <Button feedbackChange={badClick} name='bad'/>
        </div>
        <div>
          <h2>Statistics</h2>
            <Statistics statName ='Good' stat={good} char=''/>
            <Statistics statName ='Neutral' stat={neutral} char='' />
            <Statistics statName ='Bad' stat={bad} char='' />
            <Statistics statName ='All' stat={feedbackTotal} char='' />
            <Statistics statName ='Average' stat={feedbackAverage} char='' />
            <Statistics statName ='Positive' stat={positivePercentage} char='%' />
        </div>
    </div>
  )
}

export default App;