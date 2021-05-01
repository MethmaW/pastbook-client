const showOrderReducer = (state = [], action) => {
	switch (action.type) {
		case "SHOW_ORDER":
			return (state = action.payload);
		default:
			return state;
	}
};

export default showOrderReducer;
