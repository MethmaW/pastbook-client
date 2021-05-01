import React from "react";
import { useDispatch } from "react-redux";
import * as InternalAPIs from "../../utils/api/internalAPIs";
import { showOrder, isAuth } from "../../actions/index";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./styles/createGridBtn.css";

const CreateGridBtn = ({ text, photos, to, save, icon }) => {
	//varaibles
	const dispatch = useDispatch();

	//methods and statements
	const handleSelectionUpload = (save) => {
		dispatch(isAuth(true));
		dispatch(showOrder(photos));

		if (save) {
			InternalAPIs.saveGrid(photos).then((res) =>
				localStorage.setItem("grid", res.data._id)
			);
		}
	};

	return (
		<div className='createGridDiv'>
			<Button
				type='default'
				shape='round'
				icon={icon}
				size='large'
				onClick={() => handleSelectionUpload(save)}
			>
				<Link to={to}> &nbsp; {text}</Link>
			</Button>
		</div>
	);
};

export default CreateGridBtn;
