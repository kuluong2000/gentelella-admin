import * as actionType from "./actionType";

export const showSidebar = (data) => {
  return {
    type: actionType.SHOW_SIDEBAR,
    payload: data,
  };
};
export const hideSidebar = (data) => {
  return {
    type: actionType.HIDE_SIDEBAR,
    payload: data,
  };
};
