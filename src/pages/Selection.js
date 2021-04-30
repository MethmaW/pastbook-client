import React from "react";
import { withRouter } from "react-router-dom";

const Selection = () => {
	function allowDrop(ev) {
		ev.preventDefault();
	}

	function drag(ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
		console.log(ev.target.id);
	}
	return (
		<>
			<div id='div1' onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
				<img
					src='img_w3slogo.gif'
					draggable='true'
					onDragStart={(e) => drag(e)}
					id='drag1'
					width='88'
					height='31'
				/>
			</div>

			<div
				id='div2'
				onDrop={(e) => drop(e)}
				onDragOver={(e) => allowDrop(e)}
			></div>

			<div
				id='div3'
				onDrop={(e) => drop(e)}
				onDragOver={(e) => allowDrop(e)}
			></div>

			<div
				id='div4'
				onDrop={(e) => drop(e)}
				onDragOver={(e) => allowDrop(e)}
			></div>
		</>
	);
};

export default withRouter(Selection);
