import { useState } from 'react'
import Input from './Components/Input'
import useCurrencyinfo from './Hooks/useCurrencyinfo.js'

function App() {
  const [amount, setAmout] = useState('')
  const [from, setFrom] = useState("inr")
  const [To, setTo] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrencyinfo(from)
  const options = Object.keys(currencyInfo);
  const changeval = ()=>{
    setFrom(options[0])
    setTo(options[1])
  }
  const swap = () => {
    setFrom(To);
    setTo(from);
    setConvertedAmount(amount)
    setAmout(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[To])
  }

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/106152/euro-coins-currency-money-106152.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1">
                <Input
                  label="From"
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setAmout(amount)}
                  selectCurrency={() => changeval()}
                  onAmountChange={(amount) => setAmout(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <Input
                  label="To"
                  amount={convertedAmount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={To}
                  onAmountChange={(amount) => setAmout(amount)}
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert  {from.toUpperCase()} to {To.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
