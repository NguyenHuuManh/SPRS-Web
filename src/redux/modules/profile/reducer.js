import produce from "immer";
import * as type from "../../type";

const initialState = {
  data: {
    profile: {},
    isLoading:false,
    error: null,
  },
};

export const profileReducer = (state = initialState, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case type.REQUEST_GET_PROFILE:
        draftState.data.isLoading = false;
        break;

      case type.REQUEST_GET_PROFILE_SUCCESS:
        draftState.data.profile = action.payload;
        draftState.data.isLoading = false;
        break;
      case type.REQUEST_GET_PROFILE_FAILED:
        draftState.data.isLoading = false;
        draftState.data.error = action.error;
        break;
      default:
        break;
    }
  });
};
