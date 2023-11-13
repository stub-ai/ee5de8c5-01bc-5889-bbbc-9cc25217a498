import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="p-5 bg-gray-200 rounded shadow-lg">
      <div className="mb-5">
        <input
          type="text"
          value={input}
          disabled
          className="w-full p-2 text-right bg-white"
        />
        <div className="text-right">{result}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/"].map((value) => (
          <button
            key={value}
            onClick={() => handleClick(value)}
            className="p-2 bg-blue-500 text-white rounded shadow"
          >
            {value}
          </button>
        ))}
        <button onClick={calculate} className="col-span-2 p-2 bg-green-500 text-white rounded shadow">
          =
        </button>
        <button onClick={clear} className="col-span-2 p-2 bg-red-500 text-white rounded shadow">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;