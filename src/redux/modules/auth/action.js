import * as type from "../../type";

export const loginRequest = (payload) => ({
  type: type.REQUEST_LOGIN,
  payload: payload,
});

export const LoginFaild = (payload) => ({
  type: type.REQUEST_LOGIN_FAILED,
  payload,
});

export const LoginSuccess = (payload) => ({
  type: type.REQUEST_LOGIN_SUCCESS,
  payload,
});

export const Logout = () => ({
  type: type.REQUEST_LOGOUT,
});
