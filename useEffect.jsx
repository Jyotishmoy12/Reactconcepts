
import './App.css';
import { useState, useEffect } from 'react';
const App=() =>{
  // first name of the state
  // seter function
  // inside the usestate provide initial value
 const [counter, setCounter]=useState(0);
 // it takes arrow function as parameter
 useEffect(()=>{
    setCounter(100); // never modify content of hooks manually
 }, []) // []= dependency array
  return (
    <div className="App">
    <button onClick={()=>setCounter((prevCount)=>prevCount-1)}>-</button>
     <h1>{counter}</h1>
     <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
     </div>
  );
}

export default App;
