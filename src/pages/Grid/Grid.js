import React from "react";
import { Row, Col, Button } from "antd";
import { SelectHeader } from "../../rootImports";
import "./styles/grid.css";
import { PlusOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as InternalAPIs from "../../utils/api/internalAPIs";
import Cookies from "js-cookie";
import { showOrder, isAuth } from "../../actions/index";

const Grid = () => {
	//varaiables
	const dispatch = useDispatch();
	const finalSpaceCharacters = [];
	let vals = 0;

	let itd = [];

	//redux state
	const showSelectionOrder = useSelector((state) => state.showOrderReducer);
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

	if (userGrid.length !== 9 && showSelectionOrder.length === 9) {
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

		const id = localStorage.getItem("grid");

		console.log("deleteGrid id", id);
		InternalAPIs.deleteGrid(id).then((res) => {
			console.log("deleteGrid res", res, id);
			localStorage.removeItem("grid");
		});
	};

	//global logs
	console.log("Grid - showSelectionOrder", showSelectionOrder);
	console.log("Grid - userGrid", userGrid);

	return (
		<>
			<div>
				<div className='createGridDiv'>
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
