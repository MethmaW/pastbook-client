import axios from "axios";

/**
 * @typedef {Array} photoEntries
 *
 * @property {String} id Id of the image
 * @property {String} message message of the image
 * @property {String} picture url of the image
 * @property {String} pictureMedium Id of each entry
 * @property {String} pictureSmall Id of each entry
 * @property {String} pictureStored Id of each entry
 * @property {String} timestamp Id of each entry
 */

/**
 * GET request - Uploaded Photos
 * @returns {photoEntries}
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
