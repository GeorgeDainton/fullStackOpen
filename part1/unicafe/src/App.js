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

const StatisticLine = (props) => {
  return (
    <div>
      {props.statName} {props.stat}
    </div>
  )
}

const Statistics = (props) => {
  if(props.feedbackGiven === false) {
    return (
      <div>
        No feedback given
      </div>
    )
  } 
  return (
    <div>
      <StatisticLine statName='Good' stat={props.good} />
      <StatisticLine statName='Neutral' stat={props.neutral} />
      <StatisticLine statName='Bad' stat={props.bad} />
      <StatisticLine statName='All' stat={props.feedbackTotal} />
      <StatisticLine statName='Average' stat={props.feedbackAverage} />
      <StatisticLine statName='Positive' stat={props.positivePercentage + '%'} />
    </div>
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setFeedback] = useState([])
  const [feedbackGiven, setFeedbackGiven] = useState(false)

  const feedbackTotal = good + neutral + bad
  const feedbackAverage = allFeedback.reduce((a, b) => a + b, 0) / allFeedback.length
  const positivePercentage = good / (good + neutral + bad) 

  const StatProps = {
    feedbackGiven: feedbackGiven,
    good: good,
    neutral: neutral,
    bad: bad,
    feedbackTotal: feedbackTotal,
    feedbackAverage: feedbackAverage,
    positivePercentage: positivePercentage
  }

  const goodClick = () => {
    setGood(good + 1)
    setFeedback(allFeedback.concat(1))
    setFeedbackGiven(true)
    console.log(allFeedback)
  }
  
  const neutralClick = () => {
    setNeutral(neutral + 1)
    setFeedback(allFeedback.concat(0))
    setFeedbackGiven(true)
    console.log(allFeedback)

  }
  
  const badClick = () => {
    setBad(bad + 1)
    setFeedback(allFeedback.concat(-1))
    setFeedbackGiven(true)
    console.log(allFeedback)
  }
  

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
            <Statistics {...StatProps}/>
            
        </div>
    </div>
  )
}

export default App;