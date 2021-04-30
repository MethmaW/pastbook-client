import React from "react";
import { Row, Col, Card, Button } from "antd";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";
import "./styles/createGridBtn.css";

const CreateGridBtn = ({ text }) => {
	return (
		<div className='createGridDiv'>
			<Button type='default' shape='round' icon={<PlusOutlined />} size='large'>
				{text}
			</Button>
		</div>
	);
};

export default CreateGridBtn;
