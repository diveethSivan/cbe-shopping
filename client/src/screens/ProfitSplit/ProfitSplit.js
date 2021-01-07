import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Form, Input } from "../../components";
import "./ProfitSplit.scss";

const ProfitSplit = () => {
  const [perDayProfit, setPerDayProfit] = useState("");
  const [gst, setGst] = useState("");
  const [gstProfit, setGstProfit] = useState("");
  const [investorProfit, setInvestorProfit] = useState("");
  const [ourProfit, setOurProfit] = useState("");

  const calculateProfit = () => {
    let gstProfitAmount = parseInt(perDayProfit) * (parseInt(gst) / 100);
    let totalProfit = parseInt(perDayProfit) + gstProfitAmount;
    let profitSplit = totalProfit / 2;
    setGstProfit(totalProfit + "");
    setInvestorProfit(profitSplit + "");
    setOurProfit(profitSplit + "");
  };

  return (
    <div className="profit-split-wrapper">
      <Helmet>
        <title>CBE Shopping | Profit Split</title>
      </Helmet>
      <Form title="Profit Split Up">
        <Input
          label="Per Day Profit"
          value={perDayProfit}
          handleChange={(event) => setPerDayProfit(event.target.value)}
        />
        <Input
          label="GST %"
          value={gst}
          handleChange={(event) => setGst(event.target.value)}
          handleBlur={() => calculateProfit()}
        />
        <Input
          label="Profit(With GST)"
          value={gstProfit}
          handleChange={(event) => setGstProfit(event.target.value)}
        />
        <Input
          label="Investor Profit"
          value={investorProfit}
          handleChange={(event) => setInvestorProfit(event.target.value)}
        />
        <Input
          label="Our Profit"
          value={ourProfit}
          handleChange={(event) => setOurProfit(event.target.value)}
        />
        <Button theme="light" text="Finish" />
      </Form>
    </div>
  );
};

export default ProfitSplit;
