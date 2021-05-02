/**
 * Redux reducer to show the photo selection
 * @function showOrderReducer
 */
const showOrderReducer = (state = [], action) => {
	switch (action.type) {
		case "SHOW_ORDER":
			return (state = action.payload);
		default:
			return state;
	}
};

/**
 * Redux reducer to show photos in the database
 * @function showOrderReducer
 */
const userGridReducer = (state = [], action) => {
	switch (action.type) {
		case "USER_GRID":
			return (state = action.payload);
		default:
			return state;
	}
};

export { showOrderReducer, userGridReducer };
