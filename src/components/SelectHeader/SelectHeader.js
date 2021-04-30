import React from "react";
import "./styles/components.css";

const SelectHeader = ({ text }) => {
	return (
		<div>
			<h1 className='selectHeader'>{text}</h1>
		</div>
	);
};

export default SelectHeader;
