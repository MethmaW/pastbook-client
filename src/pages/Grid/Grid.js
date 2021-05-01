import React from "react";
import { Row, Col } from "antd";
import { SelectHeader } from "../../rootImports";
import "./styles/grid.css";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const Grid = () => {
	//varaiables
	const finalSpaceCharacters = [];
	let vals = 0;

	//redux state
	const showOrder = useSelector((state) => state.showOrderReducer);
	const userGrid = useSelector((state) => state.userGridReducer);

	//methods and statements
	if (userGrid.length === 9) {
		userGrid.map((pic) => {
			return finalSpaceCharacters.push({
				id: pic.id,
				thumb: pic.thumb,
			});
		});
	}

	if (userGrid.length !== 9 && showOrder.length === 9) {
		showOrder.map((pic, i) => {
			vals = vals + 1;
			return finalSpaceCharacters.push({
				id: pic.id,
				thumb: pic.thumb,
			});
		});
	}

	//global logs
	console.log("Grid - showOrder", showOrder);
	console.log("Grid - userGrid", userGrid);

	return (
		<>
			<div>
				<SelectHeader
					text='My new photo grid!'
					size='3rem'
					width='80%'
					margin='5% 10% 8% 10%'
				/>

				<Row>
					{finalSpaceCharacters.map(({ thumb }, index) => {
						return (
							<Col className='gridRow' xs={20} sm={16} md={12} lg={8} xl={8}>
								<div className='cardParentDiv'>
									<img src={thumb} alt={`${index} Thumb`} className='imageGrid' />
								</div>
							</Col>
						);
					})}
				</Row>
			</div>
		</>
	);
};

export default withRouter(Grid);
// export default Grid;
