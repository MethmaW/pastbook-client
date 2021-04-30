import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import * as ExternalAPIs from "../../utils/api/externalAPIs";
import "./styles/pages.css";

const Home = () => {
	//states
	const [uploadedPhotos, setUploadedPhotos] = useState([]);
	const [selectedPhotosArr, setSelectedPhotosArr] = useState([]);

	//useEffect calls
	useEffect(() => {
		ExternalAPIs.getUploadedPhotos().then((res) => setUploadedPhotos(res));
	}, []);

	//varaiables

	//methods
	const handleImageClick = (id) => {
		console.log(id);
		selectedPhotosArr.includes(id)
			? setSelectedPhotosArr(selectedPhotosArr.filter((item) => item !== id))
			: setSelectedPhotosArr((prevState) => [...prevState, id]);
	};

	//global logs
	console.log("uploadedPhotos", uploadedPhotos);
	console.log("selectedPhotosArr", selectedPhotosArr);

	return (
		<>
			<div className='site-card-wrapper'>
				<Row>
					{uploadedPhotos.map((photo) => {
						return (
							<>
								<Col key={photo.id} xs={20} sm={16} md={12} lg={8} xl={8}>
									<div className='cardParentDiv'>
										<Card bordered={false}>
											{" "}
											<img
												id={photo.id}
												onClick={() => handleImageClick(photo.id)}
												style={
													selectedPhotosArr.includes(photo.id)
														? { opacity: 0.5 }
														: { opacity: 1 }
												}
												alt={photo.timestamp}
												title={photo.timestamp}
												src={photo.picture}
												className='image'
											/>
										</Card>
										{selectedPhotosArr.includes(photo.id) && (
											<div className='photoSelectedTick'>
												<CheckOutlined className='tick' />
											</div>
										)}
									</div>
								</Col>
							</>
						);
					})}
				</Row>
			</div>
		</>
	);
};

export default Home;
