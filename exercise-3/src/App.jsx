import React, { useState } from "react";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  const handleCompute = () => {
    const numA = parseFloat(a) || 0;
    const numB = parseFloat(b) || 0;
    setResult(numA + numB);
  };

  return (
    <main>
      <h1>Calculator</h1>
      <input placeholder="A" value={a} onChange={(e) => setA(e.target.value)} />
      <input placeholder="B" value={b} onChange={(e) => setB(e.target.value)} />
      <input value={result} disabled />
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
