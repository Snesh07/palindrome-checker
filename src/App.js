import React, { useState } from "react";
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function checkPalindrome() {
    if (inputValue === "") {
      setResult("Please enter something");
    } else if (inputValue === inputValue.split("").reverse().join("")) {
      setResult(`${inputValue} is a palindrome`);
    } else {
      setResult(`${inputValue} is not a palindrome`);
    }
  }

  return (
    <form className="form_container">
      <label htmlFor="input">Enter any text or number:</label>
      <br />
      <input
        type="text"
        id="input"
        name="input"
        value={inputValue}
        onChange={handleInputChange}
        required
      />
      <br />
      <button type="button" onClick={checkPalindrome}>
        Check
      </button>
      <div className="result">{result}</div>
    </form>
  );
}

export default App;
