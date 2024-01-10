import { useState, useRef, useCallback } from "react";
import lockImage from '../assets/security.png'

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numSet = "0123456789";
    const charSet = "!@#$%^&*()_-+=<>?";

    let finalSet = alphabets;

    if (includeNumbers) {
      finalSet += numSet;
    }

    if (includeCharacters) {
      finalSet += charSet;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * finalSet.length);
      newPassword += finalSet[randomIndex];
    }

    setPassword(newPassword);
  }, [length, includeNumbers, includeCharacters]);

  const copyToClipboard = () => {
    // console.log(passwordRef.current.select());
    // console.log(document.execCommand("copy"));
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <div className="appContainer">
      <div>
        <label>
          Password Length:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min={4}
          />
        </label>
        <p className="byDefault">
          By default upper and lower case alphabets are included
        </p>
        <br />
        <label>
          Include Numbers:
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
        </label>
        <br />
        <label>
          Include Special Characters:
          <input
            type="checkbox"
            checked={includeCharacters}
            onChange={() => setIncludeCharacters(!includeCharacters)}
          />
        </label>
        <br />
        <button onClick={generatePassword}>Generate Password</button>
        <br />
        {password && (
          <>
            <textarea ref={passwordRef} value={password} readOnly />
            <button onClick={copyToClipboard}>Copy to Clipboard</button>
          </>
        )}
      </div><div className="sidebarImg">
        <img src={lockImage} alt="img" />
      </div>
      
    </div>
  );
};

export default PasswordGenerator;
