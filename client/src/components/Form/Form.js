import React from "react";
import { Container } from "../../components";
import "./Form.scss";

const Form = ({ children, title }) => {
  return (
    <div className="form-wrapper">
      <h2>{title}</h2>
      <Container>{children}</Container>
    </div>
  );
};

export default React.memo(Form);
