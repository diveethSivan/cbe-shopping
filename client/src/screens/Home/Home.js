import React, { useState } from "react";
import { Button, Container, Input } from "../../components";
import "./Home.scss";

const Home = () => {
  const [userId, setUserId] = useState("");
  const [investment, setInvestment] = useState("0");
  const [dailyProfit, setDailyProfit] = useState("");

  return (
    <div className="home-screen-wrapper">
      <div className="form-wrapper">
        <h2>Daily Profit</h2>
        <Container>
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
          <Button theme="light" />
        </Container>
      </div>
    </div>
  );
};

export default Home;
