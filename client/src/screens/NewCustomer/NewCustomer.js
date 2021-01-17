import React, { useRef, useState } from "react";
import {
  Button,
  Form,
  Input,
  Header,
  Loader,
  SelectBox,
} from "../../components";
import { Strings } from "../../constants";
import { investmentService } from "../../services";
import "./NewCustomer.scss";

const NewCustomer = () => {
  const loader = useRef(null);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [investment, setInvestment] = useState("");
  const [months, setMonths] = useState("");

  //Add new customer to DB
  const addCustomer = () => {
    loader.current.classList.remove("hide");
    if (name !== "" && dob !== "" && investment !== "" && months !== "") {
      investmentService
        .addCustomer(name, dob, investment, months)
        .then((response) => {
          loader.current.classList.add("hide");
          alert(response.msg);
        })
        .catch((error) => {
          loader.current.classList.add("hide");
          console.error("Exception while inserting customer : ", error);
        });
    } else {
      loader.current.classList.add("hide");
      alert("Please fill all the fields!");
    }
  };

  return (
    <div className="new-customer-wrapper">
      <Header />
      <Form title="Add New Investment">
        <Input
          label="Customer Name"
          value={name}
          handleChange={(event) => setName(event.target.value)}
          required={true}
        />
        <Input
          label="Customer DOB"
          type="date"
          value={dob}
          handleChange={(event) => setDob(event.target.value)}
          required={true}
        />
        <Input
          label="Investment"
          value={investment}
          handleChange={(event) => setInvestment(event.target.value)}
          required={true}
        />
        <SelectBox
          data={Strings.APPLICATION.INVESTMENT.DURATION}
          labelText="Duration"
          value={months}
          handleChange={(value) => setMonths(value)}
          required={true}
        />
        <Button theme="light" text="Add" handleClick={() => addCustomer()} />
      </Form>
      <div ref={loader} className="loader-container hide">
        <Loader />
      </div>
    </div>
  );
};

export default NewCustomer;
