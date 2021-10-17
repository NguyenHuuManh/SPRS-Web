import { signin, Profile, RequestORG, } from "src/constrants/action";
import httpServices from "src/services/httpServices";

export const apiSignin = async (body) => {
  return await httpServices.post(signin, body);
};
export const apiGetProfile = async () => {
  return await httpServices.get(Profile);
};

export const apiGetRequestAdminORG = async () => {
  return await httpServices.get(RequestORG);
};
