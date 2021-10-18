import produce from "immer";
import * as type from "../../type";

const initialState = {
  auth: {
    data: {},
    isLogin: false,
  },
};

export const authReducer = (state = initialState, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case type.REQUEST_LOGIN:
        draftState.auth.isLogin = false;
        break;

      case type.REQUEST_LOGIN_SUCCESS:
        draftState.auth.data = action.payload;
        draftState.auth.isLogin = true;
        break;

      case type.REQUEST_LOGIN_FAILED:
        draftState.auth.isLogin = false;
        draftState.auth.data = action.payload;
        break;
      case type.REQUEST_LOGOUT:
        draftState.auth.isLogin = false;
        draftState.auth.data = {};
        break;
      default:
        break;
    }
  });
};
