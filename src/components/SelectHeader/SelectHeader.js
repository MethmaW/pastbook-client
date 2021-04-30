import React from "react";
import "./styles/selectedHeader.css";

const SelectHeader = ({ text }) => {
	return (
		<div>
			<h1 className='selectHeader'>{text}</h1>
		</div>
	);
};

export default SelectHeader;
