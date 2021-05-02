/**
 * redux action for authentication
 * @function isAuth
 * @param {boolean} auth
 * @returns {Object}
 */
export const isAuth = (auth) => {
	return {
		type: "IS_AUTH",
		payload: auth,
	};
};

/**
 * redux action to show selected photos
 * @function showOrder
 * @param {Array} photos
 * @returns {Object}
 */
export const showOrder = (photos) => {
	return {
		type: "SHOW_ORDER",
		payload: photos,
	};
};

/**
 * redux action to show photos in the db
 * @function userGrid
 * @param {Array} photos
 * @returns {Object}
 */
export const userGrid = (photos) => {
	return {
		type: "USER_GRID",
		payload: photos,
	};
};
