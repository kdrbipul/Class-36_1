import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  
  return (
    <div>

    <Counter></Counter>
    </div>
    
  );
}

function Counter(){
  
  const [number, setNumber] = useState(0);
  const increaseCount = () =>{
    // console.log("increase");
    const newCount = number + 1;
    // console.log(newCount);
    setNumber (newCount);
  }
  const decreaseCount = () =>{
    // console.log("decrease");
    setNumber(number - 1);
  }
  return (
    <div className='app-component'>
      <h1>Count : {number} </h1>
      <button onClick={increaseCount}>Increase + </button>
      <button onClick={decreaseCount}>Decrease + </button>
    </div>
  );
  
}


export default App;
