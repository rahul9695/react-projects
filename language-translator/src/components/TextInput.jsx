/* eslint-disable react/prop-types */

const TextInput = ({ label, value, onChange }) => (
  <div style={{textAlign: "left"}}>
    <textarea
      placeholder="Write something as per selected source language.."
      style={{width: "100%", height: "10rem", fontSize: "1rem", marginTop: "10px", padding: "8px"}}
      id={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  </div>
);

export default TextInput;
