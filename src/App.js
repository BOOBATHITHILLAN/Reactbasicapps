
import { useState } from "react";


function Button({ good, Setgood, Setbad, bad, Setneutral, neutral }) {
  return (
    <div>
      <button onClick={() => Setgood(good + 1)}>good</button>
      <button onClick={() => Setneutral(neutral + 1)}>neutral</button>
      <button onClick={() => Setbad(bad + 1)}>bad</button>
    </div>

  )
}




function Statistics({ good, neutral, bad, all }) {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {all / 3}</p>
      <p>positive {all != 0 ? ((good / all) * 100) : 0} %</p>
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
        <Statistics good={good} bad={bad} neutral={neutral} all={all} />
      </div>





    </div>
  );
}

export default App;
