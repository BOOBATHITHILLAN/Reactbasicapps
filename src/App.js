
import { useState } from "react";


function Button({text,value}){
  return(
    <button onClick={value}>{text}</button>
  )
}


function Statistics({text,value}){
  return(
    <p>{text} {value}</p>
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
        <Button text="good" value={()=>Setgood(good+1)}/>
        <Button text="neutral" value={()=>Setneutral(neutral+1)} />
        <Button text="bad" value={()=>Setbad(bad+1)} />        
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics text="good" value={good} />
        <Statistics text="neutral" value={neutral} />
        <Statistics text="bad" value={bad} />
        <Statistics text="all" value={all} />
        <Statistics text="average" value={average} />
        <Statistics text="positive" value={all!=0?percentage+"%":percentage=0+"%"} />       
      </div>





    </div>
  );
}

export default App;
