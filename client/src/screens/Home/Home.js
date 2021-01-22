import React, { useRef, useState } from "react";
import { Button, Footer, Form, Header, Input, Loader } from "../../components";
import { investmentService } from "../../services";
import "./Home.scss";

const Home = () => {
  const details = useRef(null);
  const loader = useRef(null);
  const [customerId, setCustomerId] = useState("");
  const [investment, setInvestment] = useState("0");
  const [dailyProfit, setDailyProfit] = useState("");
  const [gst, setGst] = useState("");
  const [gstProfit, setGstProfit] = useState("");
  const [investorProfit, setInvestorProfit] = useState("");
  const [ourProfit, setOurProfit] = useState("");
  const [holiday, setHoliday] = useState(false);

  //validate customerId
  const checkCustomerid = () => {
    loader.current.classList.remove("hide");
    investmentService
      .validateCustomerid(customerId)
      .then((response) => {
        if (response && response.investment) {
          setInvestment(response.investment);
          details.current.classList.remove("hide");
          loader.current.classList.add("hide");
        } else {
          details.current.classList.add("hide");
          loader.current.classList.add("hide");
          alert("CustomerId not found!!!");
        }
      })
      .catch((error) => {
        loader.current.classList.add("hide");
        console.error("Exception while validating the CustomerId : ", error);
      });
  };

  //auto populate the profit
  const calculateProfit = () => {
    let gstProfitAmount = parseInt(dailyProfit) * (parseInt(gst) / 100);
    let totalProfit = parseInt(dailyProfit) + gstProfitAmount;
    let profitSplit = totalProfit / 2;
    setGstProfit(totalProfit + "");
    setInvestorProfit(profitSplit + "");
    setOurProfit(profitSplit + "");
  };

  //insert daily profit
  const insertDailyProfit = () => {
    loader.current.classList.remove("hide");
    if (holiday) {
      investmentService
        .addDailyProfit(customerId, investment, "-", "-", "-", "-", "-")
        .then((response) => {
          if (response) {
            alert("Data saved!");
            setCustomerId("");
            details.current.classList.add("hide");
            loader.current.classList.add("hide");
          }
        })
        .catch((error) => {
          loader.current.classList.add("hide");
          console.error("Exception while adding daily profit : ", error);
        });
    } else {
      investmentService
        .addDailyProfit(
          customerId,
          investment,
          dailyProfit,
          gst,
          gstProfit,
          investorProfit,
          ourProfit
        )
        .then((response) => {
          if (response) {
            alert("Data saved!");
            setCustomerId("");
            details.current.classList.add("hide");
            loader.current.classList.add("hide");
          }
        })
        .catch((error) => {
          loader.current.classList.add("hide");
          console.error("Exception while adding daily profit : ", error);
        });
    }
  };

  return (
    <div className="home-screen-wrapper">
      <Header />
      <Form title="Daily Profit">
        <Input
          label="Customer Id"
          value={customerId}
          handleChange={(event) => setCustomerId(event.target.value)}
          handleKeyup={(event) => {
            if (event.keyCode === 13) {
              if (customerId !== "") {
                checkCustomerid();
              } else {
                alert("Please enter the customer Id");
              }
            }
          }}
        />
        <div ref={details} className="customer-details hide">
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
          <Input
            label="GST %"
            value={gst}
            handleChange={(event) => setGst(event.target.value)}
            handleBlur={() => calculateProfit()}
          />
          <Input
            label="Profit (With GST)"
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
          <Input
            type="checkbox"
            label="Holiday"
            value={holiday}
            handleChange={(event) => setHoliday(event.target.checked)}
          />
          <Button theme="light" handleClick={() => insertDailyProfit()} />
        </div>
      </Form>
      <Footer />
      <div ref={loader} className="loader-container hide">
        <Loader />
      </div>
    </div>
  );
};

export default Home;
