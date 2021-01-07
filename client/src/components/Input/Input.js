import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = ({
  handleChange,
  label,
  handleBlur,
  required,
  type,
  value,
  disabled,
}) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        onBlur={handleBlur}
        required={required}
      />
      <label>{label}</label>
    </div>
  );
};

Input.defaultProps = {
  label: "Enter text",
  type: "text",
  value: "",
  required: false
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool
};

export default React.memo(Input);
