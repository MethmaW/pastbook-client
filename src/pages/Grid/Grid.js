import React from "react";
import { Row, Col, Button } from "antd";
import { SelectHeader } from "../../rootImports";
import "./styles/grid.css";
import { PlusOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { showOrder, userGrid } from "../../actions/index";
import { withRouter, Link } from "react-router-dom";
import * as InternalAPIs from "../../utils/api/internalAPIs";

const Grid = () => {
	//varaiables
	const dispatch = useDispatch();
	const finalSpaceCharacters = [];
	let vals = 0;

	//redux state
	const showSelectionOrder = useSelector((state) => state.showOrderReducer);
	const userSelectedGrid = useSelector((state) => state.userGridReducer);

	//methods and statements
	if (userSelectedGrid.length === 9) {
		userSelectedGrid.map((pic) => {
			return finalSpaceCharacters.push({
				id: pic.id,
				thumb: pic.thumb,
			});
		});
	}

	if (userSelectedGrid.length !== 9 && showSelectionOrder.length === 9) {
		showSelectionOrder.map((pic, i) => {
			vals = vals + 1;
			return finalSpaceCharacters.push({
				id: pic.id,
				thumb: pic.thumb,
			});
		});
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
						icon={<PlusOutlined />}
						size='large'
						onClick={() => handleCurrentGridDelete()}
					>
						<Link to='/home'>"Change the grid"</Link>
					</Button>
				</div>
				<SelectHeader
					text='My new photo grid!'
					size='3rem'
					width='80%'
					margin='1% 10% 4% 10%'
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
