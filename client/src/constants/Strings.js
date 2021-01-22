const Strings = {
  APPLICATION: {
    END_POINTS: {
      DETAILS: "/details",
      INSERT_DAILY_PROFIT: "/daily-profit",
      NEW_INVESTMENT: "new-investment",
      VALIDATE_CUSTOMERID: "/validate-customerid",
    },
    ROUTES: {
      ALL: "*",
      DETAILS: "/details",
      HOME: "/",
      NEW_CUSTOMER: "/new-customer",
    },
    HEADER: {
      NAV_MENU: [
        {
          TITLE: "New Investment",
          URL: "/new-customer",
        },
        {
          TITLE: "Details",
          URL: "/details",
        },
      ],
    },
    INVESTMENT: {
      DURATION: [
        {
          NAME: "3 Months",
          VALUE: "3",
        },
        {
          NAME: "6 Months",
          VALUE: "6",
        },
        {
          NAME: "9 Months",
          VALUE: "9",
        },
        {
          NAME: "12 Months",
          VALUE: "12",
        },
      ],
    },
  },
};

export default Strings;
