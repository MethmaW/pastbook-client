import axios from "axios";
/**
 * GET request to fetch uploaded Photos
 * @function getUploadedPhotos
 * @returns {Array}
 */
const getUploadedPhotos = async () => {
	return await axios({
		url:
			"https://dev-pb-apps.s3-eu-west-1.amazonaws.com/collection/CHhASmTpKjaHyAsSaauThRqMMjWanYkQ.json",
		method: "GET",
	})
		.then((response) => response.data.entries)
		.catch((error) => {
			throw error;
		});
};

export { getUploadedPhotos };
