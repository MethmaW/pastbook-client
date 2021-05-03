import React from "react";
import { withRouter, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showOrder, userGrid } from "../../actions/index";
import { SelectHeader } from "../../rootImports";
import * as InternalAPIs from "../../utils/api/internalAPIs";
import { Row, Col, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import "./styles/grid.css";

const Grid = () => {
	//varaiables
	const dispatch = useDispatch();
	const finalSpaceCharacters = [];

	//redux state
	const showSelectionOrder = useSelector((state) => state.showOrderReducer);
	const userSelectedGrid = useSelector((state) => state.userGridReducer);

	//methods and statements
	if (userSelectedGrid.length === 9) {
		userSelectedGrid.forEach((pic) => {
			finalSpaceCharacters.push({ id: pic.id, thumb: pic.thumb });
		});
	}

	if (userSelectedGrid.length !== 9 && showSelectionOrder.length === 9) {
		showSelectionOrder.forEach((pic, i) =>
			finalSpaceCharacters.push({ id: pic.id, thumb: pic.thumb })
		);
	}

	const handleCurrentGridDelete = () => {
		dispatch(showOrder([]));
		dispatch(userGrid([]));

		const id = localStorage.getItem("grid");
		InternalAPIs.deleteGrid(id).then((res) => {
			localStorage.removeItem("grid");
		});
	};

	//global logs
	console.log("Grid - showSelectionOrder", showSelectionOrder);
	console.log("Grid - userSelectedGrid", userSelectedGrid);

	return (
		<>
			<div>
				<div className='alterGridDiv'>
					<Button
						type='default'
						shape='round'
						icon={<EditOutlined />}
						size='large'
						onClick={() => handleCurrentGridDelete()}
					>
						<Link to='/home'> &nbsp; Change the grid</Link>
					</Button>
				</div>
				<SelectHeader
					text='Photo Grid'
					size='3rem'
					width='80%'
					margin='0 10% 4% 10%'
				/>

				<Row>
					{finalSpaceCharacters.map(({ thumb }, index) => {
						return (
							<Col
								className='gridRow'
								xs={20}
								sm={16}
								md={12}
								lg={8}
								xl={8}
								key={index}
							>
								<div className='cardParentDiv'>
									<img
										src={thumb}
										alt={`${index} Thumb`}
										className='imageGrid'
										key={index}
									/>
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
