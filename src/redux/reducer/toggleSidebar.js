import * as actionType from "../actionType";

const initialState = {
  classes: "",
  loading: false,
};

export function sidebarToggle(state = initialState, action) {
  switch (action.type) {
    case actionType.SHOW_SIDEBAR:
      return {
        ...state,
        classes: action.payload,
      };
    case actionType.HIDE_SIDEBAR:
      return {
        ...state,
        classes: action.payload,
      };
    default:
      return state;
  }
}
