import axios from "axios";

const saveGrid = async (payload) => {
	console.log("payload", payload);
	return await axios({
		url: `http://localhost:4000/api/grid/save`,
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

export { saveGrid };
