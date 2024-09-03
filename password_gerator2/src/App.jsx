import { useCallback } from 'react';
import { useState } from 'react'

function App() {
  let [length, setlength] = useState(8);
  let [numberallowed, setnuberallowed] = useState(false);
  let [charallowed, setcharallowed] = useState(false);
  let [password, setpassword] = useState();

  const radompassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (setnuberallowed) {
      str += "0123456789";
    }
    if (setcharallowed) {
      str += "!@#$%^&*()?:;[]";
    }
    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass = str.charAt(char)
    }
    setpassword(pass)
  }, [length, numberallowed, charallowed, setpassword])
  console.log("password is:", password)
  return (
    <>
      <h1 className='text-4xl text-center text-white m-4'>Password Generator</h1>
      <div className='flex justify-center bg-gray-600'>
        <input className='outline-none w-1/5 py-1 px-3' type="text" placeholder='password' readOnly />
        <input type="range" />
        <input type="radio" />
        <p className='text-white'>Check It</p>
      </div>
    </>
  )
}

export default App
