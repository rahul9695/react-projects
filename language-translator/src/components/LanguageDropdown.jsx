/* eslint-disable react/prop-types */

const LanguageDropdown = ({style, label, languages, onChange }) => {
    // console.log(Object.entries(languages))
    return (
  <div style={{textAlign: "left"}}>
    <label style={{color: "gray"}} htmlFor={label}>{label}</label>
    <br />
    <select style={style} id={label} onChange={(e) => onChange(e.target.value)}>
      {Object.entries(languages).map(([languageName, languageCode]) => {
        // console.log(languageName, languageCode);
        return (
        <option key={languageCode} value={languageCode}>
          {languageName}
        </option>
      )})}
    </select>
  </div>
)};

export default LanguageDropdown;
