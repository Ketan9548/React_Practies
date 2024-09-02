import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  let [color, setColor] = useState('white')
  return (
    <>
      <div className='w-full h-screen duration-300' style={{ backgroundColor: color }} >
        <div className="flex flex-col  justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <button
            onClick={() => { setColor('black') }}
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Button text
          </button>
          <button
            onClick={() => { setColor('yellow') }}
            type="button"
            className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Button text
          </button>
          <button
            onClick={() => { setColor('red') }}
            type="button"
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Button text
          </button>
          <button
            onClick={() => { setColor('green') }}
            type="button"
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Button text
          </button>
        </div>

      </div>
    </>
  )
}

export default App
