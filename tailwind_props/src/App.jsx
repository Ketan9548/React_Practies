import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './Components/Cart'

function App() {
  const [count, setCount] = useState(0)
  let arr1 = [2,3,1,3,32];
  let obj1 = {
    sumit:"name",
    rollno:"43"
  }
  return (
    <>
      <h1 className='bg-green-600 text-black p-3 rounded-xl mb-5'>Tailwind Test</h1>
      <Cart title='good' val = {arr1}/>
      <Cart title='work' obj = {obj1.rollno}/>
      <Cart title='name' />
    </>
  )
}

export default App
