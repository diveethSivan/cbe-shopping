import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { Button, DataTable, Form, Header, Input } from "../../components";
import { investmentService } from "../../services";
import "./Details.scss";

const Details = () => {
  const [customerId, setCustomerid] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [data, setData] = useState(null);

  const fetchDetails = () => {
    investmentService
      .fetchDetails(customerId, fromDate, toDate)
      .then((response) => {
        if (response) {
          console.log(response);
          setData(response);
        }
      })
      .catch((error) => {
        console.error("Exception while fetching customer details : ", error);
      });
  };

  const columns = [
    {
      name: "Investment",
      selector: "investment",
      sortable: true,
    },
    {
      name: "Date Added",
      selector: "timestamp",
      sortable: true,
    },
    {
      name: "Daily Profit",
      selector: "dailyProfit",
      sortable: true,
    },
    {
      name: "GST (%)",
      selector: "gst",
      sortable: true,
    },
    {
      name: "GST Profit",
      selector: "gstProfit",
      sortable: true,
    },
    {
      name: "Investor Profit",
      selector: "investorProfit",
      sortable: true,
    },
    {
      name: "Our Profit",
      selector: "ourProfit",
      sortable: true,
    },
  ];

  return (
    <div className="details-wrapper">
      <Header />
      <Form title="Fetch Customer Details">
        <div className="filter-section">
          <Input
            label="Customer Id"
            value={customerId}
            handleChange={(event) => setCustomerid(event.target.value)}
            required={true}
          />
          <Input
            label="From"
            type="date"
            value={fromDate}
            handleChange={(event) => setFromDate(event.target.value)}
            required={true}
          />
          <Input
            label="To"
            type="date"
            value={toDate}
            handleChange={(event) => setToDate(event.target.value)}
            required={true}
          />
        </div>
        <Button theme="light" text="Fetch" handleClick={() => fetchDetails()} />
      </Form>
      {data ? (
        <div className="customer-details">
          {data.length !== 0 ? (
            <div className="download-wrapper">
              <CSVLink
                data={data}
                filename={`${customerId}.csv`}
                target="_blank"
              >
                Download Data
              </CSVLink>
            </div>
          ) : null}
          <DataTable columns={columns} data={data} />
        </div>
      ) : null}
    </div>
  );
};

export default Details;
