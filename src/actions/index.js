export const isAuth = (auth) => {
	return {
		type: "IS_AUTH",
		payload: auth,
	};
};
export const showOrder = (photos) => {
	return {
		type: "SHOW_ORDER",
		payload: photos,
	};
};

export const userGrid = (photos) => {
	return {
		type: "USER_GRID",
		payload: photos,
	};
};
