import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(0);

  function increment() {
    if(counter<20){
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
    }
  }
  function decrement() {
    if(counter>0){
      setCounter(counter-1);
    }
  }
  return (
    <>
      <h1>Good One: {counter}</h1>
      <button onClick={increment}>Update</button>
      <button  onClick={decrement}>Remove</button>
    </>
  )
}

export default App
