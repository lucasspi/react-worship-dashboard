import { combineReducers } from "redux";
import { InfoReducer } from "./InfoReducer/reducer";

export default combineReducers({
  infoReducer: InfoReducer,
});
