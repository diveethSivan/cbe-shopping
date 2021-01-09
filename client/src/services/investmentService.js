import { appAxios } from "../utils";
import { Strings } from "../constants";

export default class investmentService {
  static addCustomer = async (name, dob, investment, months) => {
    try {
      let id = name.toLowerCase() + dob.replaceAll("-", "");
      const response = await appAxios.get(
        Strings.APPLICATION.END_POINTS.NEW_INVESTMENT,
        {
          params: {
            id,
            name,
            dob,
            investment,
            months,
          },
        }
      );
      console.log("addCustomer response : ", response);
      return response.data;
    } catch (error) {
      console.log("Error - investmentService -> addCustomer : ", error);
    }
  };

  static validateCustomerid = async (id) => {
    try {
      const response = await appAxios.get(
        Strings.APPLICATION.END_POINTS.VALIDATE_CUSTOMERID,
        {
          params: {
            id,
          },
        }
      );
      console.log("validateCustomerid response : ", response);
      return response.data;
    } catch (error) {
      console.log("Error - investmentService -> validateCustomerid : ", error);
    }
  };

  static addDailyProfit = async (
    id,
    investment,
    dailyProfit,
    gst,
    gstProfit,
    investorProfit,
    ourProfit
  ) => {
    try {
      const response = await appAxios.get(
        Strings.APPLICATION.END_POINTS.INSERT_DAILY_PROFIT,
        {
          params: {
            id,
            investment,
            dailyProfit,
            gst,
            gstProfit,
            investorProfit,
            ourProfit,
          },
        }
      );
      console.log("addDailyProfit response : ", response);
      return response.data;
    } catch (error) {
      console.log("Error - investmentService -> addDailyProfit : ", error);
    }
  };
}
