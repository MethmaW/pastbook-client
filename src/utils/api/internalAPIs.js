import axios from "axios";

/**
 * Axios call to save the grid selected by the user
 * @function saveGrid
 * @param {Array} payload
 * @returns {Object}
 */
const saveGrid = async (payload) => {
	console.log("payload", payload);
	return await axios({
		url: `${process.env.REACT_APP_BACKEND_URL}/api/grid/save`,
		method: "POST",
		data: {
			photos: payload,
		},
	})
		.then((response) => response.data)

		.catch((err) => {
			console.log(err);
		});
};

/**
 * Axios call to get the selected grid from the database
 * @function getGrid
 * @returns {Object}
 */
const getGrid = async () => {
	return await axios({
		url: `${process.env.REACT_APP_BACKEND_URL}/api/grid/get`,

		method: "GET",
	})
		.then((response) => response.data)

		.catch((err) => {
			console.log(err);
		});
};

/**
 * Axios call to delete the selected grid from the database
 * @param {String} id
 * @returns {Object}
 */
const deleteGrid = async (id) => {
	return await axios({
		url: `${process.env.REACT_APP_BACKEND_URL}/api/grid/delete`,

		method: "POST",
		data: {
			id: id,
		},
	})
		.then((response) => response.data)

		.catch((err) => {
			console.log(err);
		});
};

export { saveGrid, getGrid, deleteGrid };
