import { useState } from 'react'

const Title = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const Button = ({click, name}) => {
  return (
    <div>
      <button onClick={click}> {name} </button>
    </div>
  )
}

const Anecdote = ({ anecdotes, selected }) => {
  return (
    <div>
      {anecdotes[selected]}
    </div>
  )
}
const MostVotes = ({ points, anecdotes }) => {
  const highScore = Math.max(...points)
  const highScoreIndex = points.indexOf(highScore)
  const leader = anecdotes[highScoreIndex]

  return (
    <div>
      <p>{leader}</p> has {highScore} votes
    </div>
    
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
   

  const randomiseSelected = () => {
    const randomIndex = Math.floor(Math.random()*anecdotes.length)
    setSelected(randomIndex)
}

  const voteForAnecdote = () => {
    const pointsCopy = [ ...points ]
    pointsCopy[selected] += 1
    setPoints(pointsCopy)
    console.log(pointsCopy)
    console.log(points)
  }

  return (
    <div>
      <>
        <Title title='Anecdote of the Day'/>
        <Anecdote anecdotes={anecdotes} selected ={selected}/>
        <Button click={voteForAnecdote} name='Vote' />
        <Button click={randomiseSelected} name='Next Anecdote' />
      </>
      <>
        <Title title= 'Anecdote with the most votes' />
        <MostVotes anecdotes={anecdotes} points={points}/>
      </>
    </div>
  )
}

export default App;
