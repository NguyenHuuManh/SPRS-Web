import * as type from "../../type";

export const sidebarShow = (status) => ({
  type: type.SIDE_BAR_SHOW,
  status: status,
});
