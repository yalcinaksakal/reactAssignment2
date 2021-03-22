import React from "react";
import "./Input.css";
const input = props => {
  return (
    <div className="Input">
      <input
        type="search"
        onChange={props.change}
        value={props.text}
        placeholder="Enter text"
      />
      <p>Length: {props.textLength}</p>
    </div>
  );
};

export default input;
