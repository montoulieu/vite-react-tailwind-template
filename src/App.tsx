import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-cyan-500 gap-5">
      <h1 className="text-5xl font-black">Vite React Tailwind Template</h1>
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-2xl font-bold font-mono">Count: {count}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
