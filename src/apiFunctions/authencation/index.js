import { ACCEPT_REQUEST_REGISTER_ORG, GET_ORG, GET_REQUEST_REGISTER_ORG, GET_REQUEST_REGISTER_ORG_REJECT, GET_REQUEST_REGISTER_ORG_UNCHECK, OTP_CHECKING, OTP_PASSWORD, PROFILE, REJECT_REQUEST_REGISTER_ORG, RESET_PASSWORD, SIGNIN, SIGNUP_ORG, UPDATE_ORG, UPDATE_PASS, UPDATE_PROFILE } from "src/constrants/action";
import httpServices from "src/services/httpServices";

export const apiSignin = async (body) => {
  return await httpServices.post(SIGNIN, body);
};

export const apiSigup = async (body) => {
  return await httpServices.post(
    `${SIGNUP_ORG}`, body
  );
};

export const apiOtpPassword = async (body) => {
  return await httpServices.post(`${OTP_PASSWORD}`, body);
};

export const apiOtpChecking = async (body) => {
  return await httpServices.post(`${OTP_CHECKING}`, body);
};

export const apiResetPass = async (body) => {
  return await httpServices.post(`${RESET_PASSWORD}`, body);
};

export const apiUpdatePass = async (body) => {
  return await httpServices.put(`${UPDATE_PASS}`, body);
};
export const apiGetProfile = async () => {
  return await httpServices.get(PROFILE);
};

export const apiUpdate = async (body) => {
  return await httpServices.put(`${UPDATE_PROFILE}`, body);
};

export const apiGetORG = async () => {
  return await httpServices.get(`${GET_ORG}`);
};

export const apiUpdateORG = async (body) => {
  return await httpServices.put(`${UPDATE_ORG}`, body);
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
