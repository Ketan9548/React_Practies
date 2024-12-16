import { useId } from "react"

const Input = ({ label, className = "", amount, onAmountChange, onCurrencyChange, currencyOption = [], SelectCurrent = "usd", amountDisable = false, readonly }) => {
  const amountInputId = useId()
  return (
    <div className={`bg-white p-4 rounded-lg text-sm flex items-center space-x-4 shadow-sm ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-gray-500 mb-1 block">
          {label}
        </label>
        <input
          className="outline-none w-full bg-gray-50 py-2 px-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          type="number"
          id={amountInputId}
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          readOnly = {readonly}
        />
      </div>
      <div className="w-1/2 flex flex-col items-end">
        <p className="text-gray-500 mb-1 w-full text-right">Currency Type</p>
        <select
          className="rounded-md px-3 py-2 bg-gray-50 border border-gray-300 cursor-pointer outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          value={SelectCurrent}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={amountDisable}
        >
          {currencyOption.map((val) =>
            <option key={val} value={val}>
              {val}
            </option>
          )}
        </select>
      </div>
    </div>
  )
}

export default Input
