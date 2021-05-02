import { notification } from "antd";
/**
 * Notification handling function
 * @function showNotification
 * @param {String} type
 * @param {String} msg
 * @param {String} desc
 */
const showNotification = (type, msg, desc = null) => {
	notification[type]({
		message: msg,
		description: desc,
	});
};

export { showNotification };
