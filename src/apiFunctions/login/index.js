import { signin } from "src/constrants/action";
import httpServices from "src/services/httpServices";

export const apiSignin = async (body) => {
  console.log("body", body);
  return await httpServices.post(signin, body);
};
