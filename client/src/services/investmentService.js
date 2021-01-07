import { appAxios } from "../utils";
import { Strings } from "../constants";

export default class dailyService {
  static addCustomer = async (name, dob, investment, months) => {
    try {
      let id = name + dob.replaceAll("-", "");
      const response = await appAxios.get(
        Strings.APPLICATION.END_POINTS.NEW_INVESTMENT,
        {
          params: {
            id: id,
            name: name,
            dob: dob,
            investment: investment,
            months: months,
          },
        }
      );
      console.log("addCustomer response : ", response);
      return response.data;
    } catch (error) {
      console.log("Error - dailyService -> addCustomer : ", error);
    }
  };
}
