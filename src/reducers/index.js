import { combineReducers } from "redux";
import { showOrderReducer, userGridReducer } from "./photos";
import { isAuthReducer } from "./isAuth";

/**
 * rootreducer combines all the reducers together
 * @const rootReducer
 */
const rootReducer = combineReducers({
	isAuthReducer,
	showOrderReducer,
	userGridReducer,
});

export default rootReducer;
