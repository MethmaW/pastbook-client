import { combineReducers } from "redux";
import { showOrderReducer, userGrid } from "./photos";
import { isAuthReducer } from "./isAuth";

const rootReducer = combineReducers({
	isAuthReducer,
	showOrderReducer,
	userGrid,
});

export default rootReducer;
