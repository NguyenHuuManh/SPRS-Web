import { signin, Profile, RequestORG, GET_REQUEST_REGISTER_ORG, ACCEPT_REQUEST_REGISTER_ORG } from "src/constrants/action";
import httpServices from "src/services/httpServices";

export const apiSignin = async (body) => {
  return await httpServices.post(signin, body);
};
export const apiGetProfile = async () => {
  return await httpServices.get(Profile);
};

export const apiGetRequestAdminORG = async () => {
  return await httpServices.get(GET_REQUEST_REGISTER_ORG);
};

export const apiAcceptRequestAdminORG = async (body) => {
  return await httpServices.put(ACCEPT_REQUEST_REGISTER_ORG, body);
};
