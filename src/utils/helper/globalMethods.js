import { notification } from "antd";

const showNotification = (type, msg, desc = null) => {
	notification[type]({
		message: msg,
		description: desc,
	});
};

export { showNotification };
