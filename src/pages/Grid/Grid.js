import React from "react";
import { Row, Col } from "antd";
import { SelectHeader } from "../../rootImports";
import "./styles/grid.css";
import { useSelector } from "react-redux";

const Grid = () => {
	//varaiables
	const finalSpaceCharacters = [];
	let vals = 0;

	//redux state
	const showOrder = useSelector((state) => state.showOrderReducer);

	//states

	//useEffect calls

	//methods and statements
	showOrder.length === 9 &&
		showOrder.map((pic, i) => {
			vals = vals + 1;
			finalSpaceCharacters.push({
				id: vals.toString(),
				thumb: pic,
			});
		});

	//global logs
	console.log("Grid - showOrder", showOrder);

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
					{showOrder.map(({ thumb }, index) => {
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

export default Grid;
