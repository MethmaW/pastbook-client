import { combineReducers } from "redux";
import showOrderReducer from "./showOrderReducer";

const rootReducer = combineReducers({
	showOrderReducer,
});

export default rootReducer;
