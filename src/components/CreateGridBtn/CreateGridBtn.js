import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showOrder } from "../../actions/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Row, Col, Card, Button } from "antd";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";
import "./styles/createGridBtn.css";

const CreateGridBtn = ({ text, photos, to }) => {
	const dispatch = useDispatch();
	const handleSelectionUpload = () => {
		alert("bah");
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
