import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Value, setValue] = useState(0)

  let updateval = () => {
    if (Value < 20) {
      setValue(Value + 1)
    }
    console.log("Add")
  }

  let removeval = () => {
    if (Value > 0) {
      setValue(Value - 1)
    }
    console.log("Remove")
  }

  return (
    <>
      <h1>Kapil is my name</h1>
      <h2>Counter value : {Value}</h2>
      <button onClick={updateval}>Add Value is: {Value}</button>
      <br />
      <br />
      <button onClick={removeval}>Remove Value is: {Value}</button>
    </>
  )
}

export default App
