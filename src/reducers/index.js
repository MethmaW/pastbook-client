import { combineReducers } from "redux";
import showOrderReducer from "./showOrderReducer";
import isAuthReducer from "./isAuth";

const rootReducer = combineReducers({
	showOrderReducer,
	isAuthReducer,
});

export default rootReducer;
