import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { Button, Form, Input, SelectBox } from "../../components";
import { Strings } from "../../constants";
import "./NewCustomer.scss";

const NewCustomer = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [investment, setInvestment] = useState("");
  const [months, setMonths] = useState("");

  return (
    <div className="new-customer-wrapper">
      <Helmet>
        <title>CBE Shopping | Add Customer</title>
      </Helmet>
      <Form title="Add New Customer">
        <Input
          label="Customer Name"
          value={name}
          handleChange={(event) => setName(event.target.value)}
        />
        <Input
          label="Customer DOB"
          type="date"
          value={dob}
          handleChange={(event) => setDob(event.target.value)}
        />
        <Input
          label="Investment"
          value={investment}
          handleChange={(event) => setInvestment(event.target.value)}
        />
        <SelectBox
          data={Strings.APPLICATION.INVESTMENT.DURATION}
          labelText="Duration"
          value={months}
          handleChange={(value) => setMonths(value)}
        />
        <Button theme="light" text="Add" />
      </Form>
    </div>
  );
};

export default NewCustomer;
