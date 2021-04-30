import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./styles/spinner.css";

const Spinner = ({ text }) => {
	const antIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;
	return (
		<div className='spinner'>
			<p>
				<span>{text}</span> &nbsp; &nbsp; <Spin indicator={antIcon} />
			</p>
		</div>
	);
};

export default Spinner;