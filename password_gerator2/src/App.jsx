import { useCallback } from 'react';
import { useState } from 'react'

function App() {
  let [length, setlength] = useState();
  let [uniqueCharactor, setuniqueCharactor] = useState();
  let [password, setpassword] = useState();

  const radompassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  },)
  return (
    <>
      <div>
        <h1 className='text-4xl text-center text-white m-4'>Password Generator</h1>
      
      </div>
    </>
  )
}

export default App
