import React, { useState, useEffect } from "react";
import { SelectHeader, CreateGridBtn } from "../../rootImports";
import { withRouter } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import "./styles/order.css";

const Order = () => {
	//varaiables
	const finalSpaceCharacters = [];
	let vals = 0;

	//redux state
	const showOrder = useSelector((state) => state.showOrderReducer);

	//states
	const [characters, updateCharacters] = useState(finalSpaceCharacters);

	//useEffect calls

	//methods and statements
	if (showOrder.length !== 9) {
		return alert("Error occured please reload the page");
	}
	showOrder.map((pic, i) => {
		vals = vals + 1;
		finalSpaceCharacters.push({
			id: vals.toString(),
			thumb: pic,
		});
	});

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;

		const items = Array.from(characters);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		updateCharacters(items);
	};

	//global logs
	console.log("Order - showOrder", showOrder);
	console.log("Order - characters", characters);

	return (
		<>
			<div>
				<SelectHeader
					text='Drag and drop photos to arrage the order of the slected photos'
					size='3rem'
					width='80%'
					margin='10% 10% 5% 10%'
				/>

				<DragDropContext onDragEnd={handleOnDragEnd}>
					<Droppable droppableId='characters' direction='horizontal'>
						{(provided, snapshot) => (
							<Row
								className='characters'
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{characters.map(({ id, thumb }, index) => {
									return (
										<Draggable key={id} draggableId={id} index={index}>
											{(provided) => (
												<Col
													className='diva'
													xs={20}
													sm={16}
													md={12}
													lg={8}
													xl={2}
													ref={provided.innerRef}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
												>
													<p className='picNum'>{index + 1}.</p>
													<div className='cardParentDiv'>
														<img src={thumb} alt={`${index} Thumb`} className='imageSelect' />
													</div>
												</Col>
											)}
										</Draggable>
									);
								})}
								{provided.placeholder}
							</Row>
						)}
					</Droppable>
				</DragDropContext>
				<CreateGridBtn
					text='Create a photo grid'
					to='/photo-grid'
					photos={characters}
				/>
			</div>
		</>
	);
};

export default withRouter(Order);
