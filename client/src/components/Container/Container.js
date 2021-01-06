import React from "react";
import PropTypes from "prop-types";
import "./Container.scss";

const Container = ({ children, padding, size }) => {
  return <div className={`custom-container ${size} ${padding}`}>{children}</div>;
};

Container.defaultProps = {
  size: "large",
  padding: "padding-tiny",
};

Container.propTypes = {
  size: PropTypes.string,
  padding: PropTypes.string,
};

export default React.memo(Container);
