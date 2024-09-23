import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './Components/Addtodo'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>reduxtoolkit</p>
      <Addtodo />
      <Todos /> 
    </>
  )
}

export default App
