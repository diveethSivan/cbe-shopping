import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = ({ handleChange, label, type, value, disabled }) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
      <label>{label}</label>
    </div>
  );
};

Input.defaultProps = {
  label: "Enter text",
  type: "text",
  value: "",
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default React.memo(Input);
