function Header(props) {
  const { course } = props
  return (
    <h1>{course}</h1>
  )
}
function Content(props) {
  const { p1, e1, p2, e2, p3, e3 } = props;
  return (
    <div>
      <p>{p1} {e1}</p>
      <p>{p2} {e2}</p>
      <p>{p3} {e3}</p>
    </div>

  )
}
function Total(props) {
  const { total } = props;
  return (
    <h4>Total :{total} </h4>
  )
}


function App() {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  const total=exercises1+exercises2+exercises3;

 
  return (
    <div className="App">
      <Header course={course} />
      <Content p1={part1} e1={exercises1} p2={part2} e2={exercises2} p3={part3} e3={exercises3} />
      <Total total={total} />
    </div>
  );
}

export default App;
