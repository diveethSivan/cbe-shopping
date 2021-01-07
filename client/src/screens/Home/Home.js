import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { Button, Form, Input } from "../../components";
import "./Home.scss";

const Home = () => {
  const [userId, setUserId] = useState("");
  const [investment, setInvestment] = useState("0");
  const [dailyProfit, setDailyProfit] = useState("");

  return (
    <div className="home-screen-wrapper">
      <Helmet>
        <title>CBE Shopping | Daily Profits</title>
      </Helmet>
      <Form title="Daily Profit">
        <Input
          label="UserId"
          value={userId}
          handleChange={(event) => setUserId(event.target.value)}
        />
        <Input
          label="Investment"
          value={investment}
          handleChange={(event) => setInvestment(event.target.value)}
          disabled={true}
        />
        <Input
          label="Daily Profit"
          value={dailyProfit}
          handleChange={(event) => setDailyProfit(event.target.value)}
        />
        <Button theme="light" text="Next" />
      </Form>
    </div>
  );
};

export default Home;
