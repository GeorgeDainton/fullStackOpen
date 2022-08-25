const Course = ({course}) => 
<>
  <Header name={course.name} />
  <Content parts={course.parts}/>
  <Total sum={course.parts.reduce((a, b) => a + b.exercises, 0)} />
</>

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

export default Course;
