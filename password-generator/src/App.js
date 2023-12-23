import "./App.css";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let characters = "";
    let result = "";

    if (includeUpperCase) characters += upperCaseChars;
    if (includeLowerCase) characters += lowerCaseChars;
    if (includeNumbers) characters += numberChars;
    if (includeSymbols) characters += symbolChars;

    if (!characters) {
      alert("Please select at least one option for password generation.");
      return;
    }

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    setPassword(result);
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div className="password_container">
        <input type="text" readOnly="true" value={password} />
        <button
          onClick={() => {
            navigator.clipboard.writeText(password);
            if (password) alert("Yay! Password successfully copied.");
            else
              alert(
                "Password field is empty. Please click 'GENERATE PASSWORD' and Retry."
              );
          }}
        >
          <i class="fa-regular fa-copy fa-xl"></i>
        </button>
      </div>
      <div className="input_container">
        <span>
          Select Password length{" "}
          <span className="char_limit">(**8-50 characters**)</span>
        </span>
        <input
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </div>
      <form className="checkBox_container">
        <input
          type="checkbox"
          checked={includeUpperCase}
          onChange={() => setIncludeUpperCase(!includeUpperCase)}
        />
        <label>Include upper case</label>
        <br />
        <input
          type="checkbox"
          checked={includeLowerCase}
          onChange={() => setIncludeLowerCase(!includeLowerCase)}
        />
        <label>Include lower case</label>
        <br />
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
        <label>Include numbers</label>
        <br />
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
        <label>Include symbol</label>
        <br />
        <button
          type="button"
          onClick={() => {
            if (passwordLength < 8 || passwordLength > 50) {
              alert("Password length must be between 8 and 50 characters.");
              return;
            }
            generatePassword();
          }}
        >
          Generate Password
        </button>
      </form>
    </div>
  );
}

export default App;
