import { useCallback, useEffect, useRef } from 'react';
import { useState } from 'react'

function App() {
  let [length, setlength] = useState(5);
  let [numberallowed, setnuberallowed] = useState(false);
  let [charallowed, setcharallowed] = useState(false);
  let [password, setpassword] = useState();

  //ref hooks
  const passwordref = useRef(null);

  const radompassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberallowed) {
      str += "0123456789";
    }
    if (charallowed) {
      str += "!@#$%^&*()?:;[]";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char) + pass
    }
    setpassword(pass)
  }, [length, numberallowed, charallowed, setpassword])

  const copypasswordToClipboard = useCallback(() => {
    if (passwordref.current) {
      passwordref.current.select();
      // passwordref.current.setSelectionRange(0, 4);
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);

  useEffect(() => {
    radompassword()
  }, [length, numberallowed, charallowed, radompassword])

  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen bg-gray-800'>
        <h1 className='text-4xl text-white m-4'>Password Generator</h1>
        <div className='mt-6 overflow-hidden mb-4 shadow p-4 bg-gray-700 rounded-lg'>
          <div className='flex flex-row'>
            <input
              type="text"
              placeholder='Password'
              value={password}
              readOnly
              ref={passwordref}
              className='rounded-md p-2 w-full mb-4 bg-gray-900 text-orange-400'
            />
            <button onClick={copypasswordToClipboard} className='border rounded-md p-2 pl-3 pr-3 m-2 mb-6 text-orange-400 hover:bg-white'>Copy</button>
          </div>
          <label className='border rounded-md p-2 pl-2 pr-1 text-orange-400 bg-white mb-auto'>
            Length of Password: {length}
          </label>
          <input
            type="range"
            min="5"
            max="100"
            value={length}
            className='w-full mb-1 cursor-pointer mt-3'
            onChange={(e) => { setlength(Number(e.target.value)) }}
          />
        </div>

        <div className='flex items-center mb-4'>
          <input
            type="checkbox"
            className='mr-2'
            defaultChecked={numberallowed}
            id='numberInput'
            onChange={() => {
              setnuberallowed((prev) => !prev);
            }}
          />
          <label className='text-orange-400'>Include Numbers</label>
        </div>

        <div className='flex items-center mb-4'>
          <input
            type="checkbox"
            className='mr-2'
            defaultChecked={charallowed}
            id='charInput'
            onChange={() => {
              setcharallowed((prev) => !prev);
            }}
          />
          <label className='text-orange-400'>Include Special Characters</label>
        </div>

        <button
          onClick={radompassword}
          className='bg-blue-500 text-white px-4 py-2 rounded-md'
        >
          Generate Password
        </button>
      </div>
    </>
  )
}

export default App
