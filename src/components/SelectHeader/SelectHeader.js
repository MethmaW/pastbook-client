import React from "react";
import "./styles/selectedHeader.css";

const SelectHeader = ({ text, size, width, margin }) => {
	return (
		<div>
			<h1
				className='selectHeader'
				style={{ fontSize: size, width: width, margin: margin }}
			>
				{text}
			</h1>
		</div>
	);
};

export default SelectHeader;
