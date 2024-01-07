import { useState } from "react";
import axios from "axios";
import LanguageDropdown from "./LanguageDropdown.jsx";
import TextInput from "./TextInput.jsx";
// import TranslationResult from "./TranslationResult";
import { supportedLanguages } from "./apiUtils.jsx";

const styles = {
  container: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
    maxWidth: "600px",
    width: "100%",
    marginTop: "20px",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  label: {
    display: "block",
    margin: "10px 0",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "8px 0",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#9F956C",
    color: "white",
    padding: "10px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    width: "100%",
    marginTop: "5px"
  },
  buttonHover: {
    backgroundColor: "#584D3D",
    color: "white",
    padding: "10px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    width: "100%",
    marginTop: "5px"
  },
  result: {
    marginTop: "20px",
    fontWeight: "bold",
  },
};

const LanguageTranslator = () => {
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [textInput, setTextInput] = useState("");
  const [translationResult, setTranslationResult] = useState("");
  const [buttonStyle, setButtonStyle] = useState(styles.button);

  const translateTextHandler = async () => {
    if (sourceLanguage && textInput && targetLanguage) {
      const url = "https://text-translator2.p.rapidapi.com/translate";
      const apiKey = import.meta.env.VITE_API_KEY;

      const headers = {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      };

      const data = new URLSearchParams({
        source_language: sourceLanguage,
        target_language: targetLanguage,
        text: textInput,
      });

      try {
        const response = await axios.post(url, data, { headers });
        const result = response.data;

        if (result.status === "success") {
          const translatedText = JSON.parse(`"${result.data.translatedText}"`);
          setTranslationResult(translatedText);
        } else {
          setTranslationResult("Translation failed.");
        }
      } catch (error) {
        console.error("Error:", error);
        setTranslationResult("Error occurred during translation.");
      }
    }else {
        alert("Oops, either language is not selected or text input is empty!!")
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Language Translator</h1>

      <LanguageDropdown
        style={styles.input}
        label="Select Source Language"
        languages={supportedLanguages}
        onChange={setSourceLanguage}
      />
      <LanguageDropdown
        style={styles.input}
        label="Select Target Language"
        languages={supportedLanguages}
        onChange={setTargetLanguage}
      />

      <TextInput
        label="textInput"
        value={textInput}
        onChange={setTextInput}
      />

      <button
        style={buttonStyle}
        onMouseOver={() => setButtonStyle(styles.buttonHover)}
        onMouseOut={() => setButtonStyle(styles.button)}
        onClick={translateTextHandler}
      >
        Translate
      </button>

      <div style={styles.result}>{translationResult}</div>
    </div>
  );
};

export default LanguageTranslator;
