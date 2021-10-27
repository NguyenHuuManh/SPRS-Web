import { ACCEPT_REQUEST_REGISTER_ORG, GET_REQUEST_REGISTER_ORG, GET_REQUEST_REGISTER_ORG_REJECT, GET_REQUEST_REGISTER_ORG_UNCHECK, PROFILE, REJECT_REQUEST_REGISTER_ORG, SIGNIN, SIGNUP_ORG } from "src/constrants/action";
import httpServices from "src/services/httpServices";

export const apiSignin = async (body) => {
  return await httpServices.post(SIGNIN, body);
};


export const apiSigup = async (body) => {
  return await httpServices.post(
    `${SIGNUP_ORG}`, body
  );
};
export const apiGetProfile = async () => {
  return await httpServices.get(PROFILE);
};

export const apiGetRequestAdminORG = async () => {
  return await httpServices.get(GET_REQUEST_REGISTER_ORG_UNCHECK);
};
export const apiGetRequestRejectedAdminORG = async () => {
  return await httpServices.get(GET_REQUEST_REGISTER_ORG_REJECT);
};

export const apiAcceptRequestAdminORG = async (body) => {
  return await httpServices.put(ACCEPT_REQUEST_REGISTER_ORG, body);
};

export const apiRejectRequestAdminORG = async (body) => {
  return await httpServices.put(REJECT_REQUEST_REGISTER_ORG, body);
};
