import { combineReducers } from "redux";
import { teamReducer } from "./teamReducer/reducer";

export default combineReducers({
  teamReducer: teamReducer,
});
