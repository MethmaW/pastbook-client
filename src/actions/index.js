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
