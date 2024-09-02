import { useState } from 'react'

function App() {
  let [image, setImage] = useState('')

  const arr1 = ['https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg', 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg', 'https://cdn.pixabay.com/photo/2023/02/01/10/37/sunset-7760143_1280.jpg', 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600']

  console.log(arr1.length)

  return (
    <>
      <div className='w-full h-screen duration-300' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
        <div className="flex flex-col justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <button
            onClick={() => { setImage(arr1[0]) }}
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Button text1
          </button>
          <button
            // onClick={() => { setColor('yellow') }}
            onClick={() => { setImage(arr1[1]) }}
            type="button"
            className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Button text2
          </button>
          <button
            // onClick={() => { setColor('red') }}
            onClick={() => { setImage(arr1[2]) }}
            type="button"
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Button text3
          </button>
          <button
            // onClick={() => { setColor('green') }}
            onClick={() => { setImage(arr1[3]) }}
            type="button"
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Button text4
          </button>
          <button
            // onClick={() => { setColor('cyan') }}
            type="button"
            className="bg-cyan-500  rounded-md px-3 py-2 hover:bg-cyan-400"
          >
            Button text
          </button>
        </div>

      </div>
    </>
  )
}

export default App
