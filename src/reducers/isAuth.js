const isAuthReducer = (state = false, action) => {
	switch (action.type) {
		case "IS_AUTH":
			return (state = action.payload);
		default:
			return state;
	}
};

export { isAuthReducer };
