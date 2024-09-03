import { useState } from 'react'

function App() {
  const [weight, setweight] = useState('');
  const [height, sethight] = useState('');
  let [BMI, setbmi] = useState(0)
  let [changeco, setColor] = useState('white')

  function changecolor() {
    if (BMI <= 16) {
      setColor('red');
    } else if (BMI > 16 && BMI <= 17) {
      setColor('orange');
    } else if (BMI > 17 && BMI <= 18.5) {
      setColor('yellow');
    } else if (BMI > 18.5 && BMI <= 25) {
      setColor('#ADD8E6');
    } else {
      setColor('green');
    }
    console.log("change color")
    setTimeout(() => {
      setColor('white');
    }, 3000);
  }

  function updateweight() {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2)*100;
      setbmi(bmiValue);
      changecolor();
    }
    else {
      alert('Enter the Valid Weight and Height')
    }
  }

  return (
    <>
      <div className='w-full h-screen flex justify-center flex-col items-center' style={{ backgroundColor: `${changeco}` }}>
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-4'>BMI Calculator</h1>
          <div className='mb-4'>
            <input
              type="number"
              placeholder='Weight (kg)'
              value={weight}
              onChange={(e) => setweight(e.target.value)}
              className='border border-gray-400 rounded px-3 py-2 text-base'
            />
          </div>
          <div className='mb-4'>
            <input
              type="number"
              placeholder='Height (cm)'
              value={height}
              onChange={(e) => sethight(e.target.value)}
              className='border border-gray-400 rounded px-3 py-2 text-base'
            />
          </div>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
            onClick={updateweight}
          >
            Calculate BMI
          </button>
          <div className='mt-4'>
            <span className='text-lg font-semibold'>Your BMI is: {BMI}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
