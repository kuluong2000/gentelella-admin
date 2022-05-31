import { combineReducers } from "redux";
import { sidebarToggle } from "./reducer/toggleSidebar";
export default combineReducers({
  sidebarToggle: sidebarToggle,
});
