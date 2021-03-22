import React from "react";
import "./Validation.css";
const validation = props => {
  const el =
    props.textLength > 4 ? (
      <div className="Validation">
        <p>Text is long enough</p>
      </div>
    ) : (
      <div className="Validation Red">
        <p>Text is too short</p>
      </div>
    );
  return el;
};

export default validation;
