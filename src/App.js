
import { useState } from "react";






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
        <button onClick={()=>Setgood(good+1)}>good</button>
        <button onClick={()=>Setneutral(neutral+1)}>neutral</button>
        <button onClick={()=>Setbad(bad+1)}>bad</button>
      </div>
      <div>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {all!=0?percentage:percentage=0}%</p>
      </div>





    </div>
  );
}

export default App;
