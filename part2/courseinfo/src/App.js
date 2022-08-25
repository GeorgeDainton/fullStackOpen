

const Header = ({ name }) => <h1>{name}</h1>


const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
<>
  {parts.map(part =>
    <Part key={part.id} part={part} />
    )}
</>

const Total = ({ sum }) => 
<>
  <p>Number of exercises {sum} </p>
</>



//Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises}



const Course = ({course}) => {

  const addExercises = (course) => {
    let sum = 0
    for (let i = 0; i < course.parts.length; i++) {
      sum += course.parts[i].exercises
    }
    return sum
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}/>
      <Total sum={addExercises(course)} />
    </div>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
  
}

export default App;


