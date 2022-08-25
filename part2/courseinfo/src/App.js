

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


const Course = ({course}) => 
<>
  <Header name={course.name} />
  <Content parts={course.parts}/>
  <Total sum={course.parts.reduce((a, b) => a + b.exercises, 0)} />
</>

const Courses = ({courses}) => 
  <>
    {courses.map(course => 
      <Course key={course.id} course={course} />
    )}
  </>




const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses={courses}/>
    </div>
  )
}

export default App;


