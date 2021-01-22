import React from "react";
import { Container } from "../../components";
import "./Form.scss";

const Form = ({ children, title }) => {
  return (
    <div className="form-wrapper">
      <div className="form-title">{title}</div>
      <Container>{children}</Container>
    </div>
  );
};

export default React.memo(Form);
