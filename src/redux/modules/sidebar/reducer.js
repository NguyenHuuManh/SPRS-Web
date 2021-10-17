import produce from "immer";
import * as type from "../../type";

const initialState = {
  type: "",
  status: "responsive",
};

export const sideBarReducer = (state = initialState, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case type.SIDE_BAR_SHOW:
        draftState.type = action.type;
        draftState.status = action.status;
        break;
      default:
        break;
    }
  });
};
