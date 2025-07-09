import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Calculator</h2>
        <input
          type="text"
          value={input}
          readOnly
          className="w-full h-12 mb-4 text-right px-3 border rounded text-xl"
        />
        <div className="grid grid-cols-4 gap-2">
          <button onClick={() => handleClick("7")} className="btn">7</button>
          <button onClick={() => handleClick("8")} className="btn">8</button>
          <button onClick={() => handleClick("9")} className="btn">9</button>
          <button onClick={() => handleClick("/")} className="btn bg-orange-400 text-white">÷</button>

          <button onClick={() => handleClick("4")} className="btn">4</button>
          <button onClick={() => handleClick("5")} className="btn">5</button>
          <button onClick={() => handleClick("6")} className="btn">6</button>
          <button onClick={() => handleClick("*")} className="btn bg-orange-400 text-white">×</button>

          <button onClick={() => handleClick("1")} className="btn">1</button>
          <button onClick={() => handleClick("2")} className="btn">2</button>
          <button onClick={() => handleClick("3")} className="btn">3</button>
          <button onClick={() => handleClick("-")} className="btn bg-orange-400 text-white">−</button>

          <button onClick={() => handleClick("0")} className="btn">0</button>
          <button onClick={() => handleClick(".")} className="btn">.</button>
          <button onClick={handleCalculate} className="btn bg-green-500 text-white">=</button>
          <button onClick={() => handleClick("+")} className="btn bg-orange-400 text-white">+</button>
        </div>
        <button
          onClick={handleClear}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
