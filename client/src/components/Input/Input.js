import React from "react";
import "./Input.scss";

const Input = ({ handleChange, label, value, disabled }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
      <label>{label}</label>
    </div>
  );
};

export default React.memo(Input);
