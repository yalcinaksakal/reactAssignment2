import React from "react";
import "./Char.css";
const char = props => {
  return <p onClick={props.deleteChar}>"{props.textChar}"</p>;
};

export default char;
