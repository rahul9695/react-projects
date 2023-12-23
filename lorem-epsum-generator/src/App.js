import "./App.css";
import { useState } from "react";
import loremArray from './data.js'

function App() {
  let [inputValue, setInputValue] = useState("");
  let [paraCount, setParaCount] = useState("");

  function appendData(e) {
    e.preventDefault();
    if(paraCount > 5){
      alert("Take it Easy bro, Why so Lorem Epsum??")
    }
    setParaCount(inputValue);
  }

  function updateInputValue(e) {
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <form className="input_wrapper">
        <span>Paragraphs: </span>
        <input
          type="number"
          className="inputTag"
          placeholder="Number of Para"
          onChange={updateInputValue}
        />
        <button onClick={appendData}>Generate</button>
      </form>
      <div className="lorem_container">
        {loremArray.map((para, index) => {
          if (index < paraCount) {
            return (
              <div className="para">
                {index + 1} : {para}
              </div>
            );
          }
          return "";
        })}
      </div>
    </div>
  );
}

export default App;
