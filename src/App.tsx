import { useState } from "react";
import tw from "tailwind-styled-components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <TWPageWrapper>
      <h1 className="text-5xl font-black">Vite React Tailwind Template</h1>

      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-2xl font-bold font-mono">Count: {count}</h2>
        <TWButton onClick={() => setCount(count + 1)}>Increment</TWButton>
      </div>
    </TWPageWrapper>
  );
}

export default App;

const TWPageWrapper = tw.div`
  h-full
  flex flex-col items-center justify-center
  bg-gradient-to-br from-green-400 to-cyan-500 gap-5
`;

const TWButton = tw.button`
  bg-blue-500 hover:bg-blue-700
  text-white font-bold 
  py-2 px-4 rounded
`;
