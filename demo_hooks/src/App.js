import React, { useState } from 'react';
import './App.css'
const App = () => {

  //const state = useState();
  // console.log(state);
  let [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
   // console.log("Cicked", count++);
  };


  return(
    <>
    <div className='Con'>
    <h1> {count} </h1>
    <button className='Button' onClick={IncNum}> Click Me</button>
    </div>
    </>
  );

};

export default App;