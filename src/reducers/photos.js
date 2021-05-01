const showOrderReducer = (state = [], action) => {
	switch (action.type) {
		case "SHOW_ORDER":
			return (state = action.payload);
		default:
			return state;
	}
};

const userGrid = (state = [], action) => {
	switch (action.type) {
		case "USER_GRID":
			return (state = action.payload);
		default:
			return state;
	}
};

export { showOrderReducer, userGrid };
