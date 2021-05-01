import React from "react";
import { useDispatch } from "react-redux";
import { showOrder, isAuth } from "../../actions/index";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./styles/createGridBtn.css";

const CreateGridBtn = ({ text, photos, to }) => {
	const dispatch = useDispatch();
	const handleSelectionUpload = () => {
		dispatch(isAuth(true));
		dispatch(showOrder(photos));
	};

	return (
		<div className='createGridDiv'>
			<Button
				type='default'
				shape='round'
				icon={<PlusOutlined />}
				size='large'
				onClick={() => handleSelectionUpload()}
			>
				<Link to={to}>{text}</Link>
			</Button>
		</div>
	);
};

export default CreateGridBtn;
