
import { useState } from "react";


function Buttons({ text, value }) {
  return (
    <button onClick={value}>{text}</button>
  )
}


function Button({ good, Setgood, Setbad, bad, Setneutral, neutral }) {
  return (
    <div>
      <Buttons text="good" value={() => Setgood(good + 1)} />
      <Buttons text="neutral" value={() => Setneutral(neutral + 1)} />
      <Buttons text="bad" value={() => Setbad(bad + 1)} />
    </div>

  )
}


function Statisticsline({ text, value }) {
  return (
    <p>{text} {value}</p>
  )
}

function Statistics({ good, neutral, bad, all }) {
  return (
    <div>
      <Statisticsline text="good" value={good} />
      <Statisticsline text="neutral" value={neutral} />
      <Statisticsline text="bad" value={bad} />
      <Statisticsline text="all" value={all} />
      <Statisticsline text="average" value={all / 3} />
      <Statisticsline text="positive" value={all != 0 ? ((good / all) * 100) + "%" : 0 + "%"} />

    </div>

  )

}



function App() {

  const [good, Setgood] = useState(0);

  const [neutral, Setneutral] = useState(0);

  const [bad, Setbad] = useState(0);


  let all = good + bad + neutral;

  let average = (all / 3);

  let percentage = ((good / all) * 100)




  return (
    <div className="App">
      <div>
        <h1>give feedback</h1>
        <Button good={good} Setgood={Setgood} neutral={neutral} Setneutral={Setneutral} bad={bad} Setbad={Setbad} />
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics good={good} bad={bad} neutral={neutral} all={all} />
      </div>





    </div>
  );
}

export default App;