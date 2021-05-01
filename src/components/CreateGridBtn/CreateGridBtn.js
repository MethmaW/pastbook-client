import React from "react";
import { useDispatch } from "react-redux";
import * as InternalAPIs from "../../utils/api/internalAPIs";
import { showOrder, isAuth } from "../../actions/index";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./styles/createGridBtn.css";

const CreateGridBtn = ({ text, photos, to, save }) => {
	const dispatch = useDispatch();

	const handleSelectionUpload = (save) => {
		dispatch(isAuth(true));
		dispatch(showOrder(photos));

		if (save) {
			InternalAPIs.saveGrid(photos).then((res) => console.log(res));
		}
	};

	return (
		<div className='createGridDiv'>
			<Button
				type='default'
				shape='round'
				icon={<PlusOutlined />}
				size='large'
				onClick={() => handleSelectionUpload(save)}
			>
				<Link to={to}>{text}</Link>
			</Button>
		</div>
	);
};

export default CreateGridBtn;
