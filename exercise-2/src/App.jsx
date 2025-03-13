import React, { useState } from "react";
function App() {
  const [text , setText] = useState("");

  const handleInputChange = (event) => {
      setText(event.target.value);
  }


  /* You will need a function to handle a key pressed on the first input and update the state*/
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input type="text" value={text.toUpperCase()} disabled />
      </p>
    </main>
  );
}

export default App;
