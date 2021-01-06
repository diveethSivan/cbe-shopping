import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ handleClick, size, text, theme }) => {
  const _buttonClick = (e) => {
    e.preventDefault();
    handleClick();
  };
  return (
    <a className={`button-wrapper ${theme} ${size}`} href="#" onClick={_buttonClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </a>
  );
};

Button.defaultProps = {
  text: "Submit",
  theme: "dark",
  size: "medium",
};

Button.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  size: PropTypes.string,
};

export default React.memo(Button);
