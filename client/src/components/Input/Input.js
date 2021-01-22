import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = ({
  handleChange,
  label,
  handleBlur,
  handleKeyup,
  required,
  type,
  value,
  disabled,
}) => {
  return (
    <div className="input-wrapper">
      {type === "checkbox" ? (
        <div className="checkbox-wrapper">
          <span>
            {label}
            <input type="checkbox" value={value} onChange={handleChange} />
          </span>
        </div>
      ) : (
        <div>
          <input
            type={type}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            onBlur={handleBlur}
            required={required}
            onKeyUp={handleKeyup}
          />

          <label>{label}</label>
        </div>
      )}
    </div>
  );
};

Input.defaultProps = {
  label: "Enter text",
  type: "text",
  value: "",
  required: false,
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
};

export default React.memo(Input);
