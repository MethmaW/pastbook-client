import { combineReducers } from "redux";
import { showOrderReducer, userGridReducer } from "./photos";
import { isAuthReducer } from "./isAuth";

const rootReducer = combineReducers({
	isAuthReducer,
	showOrderReducer,
	userGridReducer,
});

export default rootReducer;
