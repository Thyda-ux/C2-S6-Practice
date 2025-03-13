import React, { useState } from "react";
import "./index.css"; 

function App() {
   const [isRaining,setIsRaining]= useState(true);

  function onSunClick() {
    setIsRaining(false);
  }

  function onRainClick() {
    setIsRaining(true);
  }

  function getTitle() {
    return isRaining ? "RAIN TIME !" : "SUN TIME !";
  }

  function getBackgroundColor() {
    return isRaining ? "rainy" : "sunny";
  }
  

  return (
    <main className={`h-screen flex flex-col justify-center items-center ${getBackgroundColor()}`}>
    <h1 className="text-2xl font-bold">{getTitle()}</h1>
    <div className="mt-4">
      <button onClick={onSunClick} className="px-4 py-2 m-2 bg-yellow-500 text-white rounded-lg">
        Sunny Time
      </button>
      <button onClick={onRainClick} className="px-4 py-2 m-2 bg-blue-500 text-white rounded-lg">
        Rain Time
      </button>
    </div>
  </main>
  );
}

export default App;
