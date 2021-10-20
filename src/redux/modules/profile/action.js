import * as type from "../../type";

export const getProfileRequest = () => ({
  type: type.REQUEST_GET_PROFILE,
});

export const getProfileFaild = (payload) => ({
  type: type.REQUEST_GET_PROFILE_FAILED,
  payload,
});

export const getProfileSuccess = (payload) => ({
  type: type.REQUEST_GET_PROFILE_SUCCESS,
  payload,
});

