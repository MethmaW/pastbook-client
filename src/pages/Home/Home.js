import React, { useState, useEffect } from "react";
import * as ExternalAPIs from "../../utils/api/externalAPIs";
import * as GlobalMethods from "../../utils/helper/globalMethods";
import { SelectHeader, Spinner, CreateGridBtn } from "../../rootImports";
import { Row, Col, Card } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "./styles/home.css";
import { PlusOutlined, BorderInnerOutlined } from "@ant-design/icons";

const Home = () => {
	//varaiables

	//states
	const [uploadedPhotos, setUploadedPhotos] = useState([]);
	const [selectedPhotosArr, setSelectedPhotosArr] = useState([]);
	const [showSpin, setShowSpin] = useState(true);

	//useEffect calls
	useEffect(() => {
		getPhotoData();
	}, []);

	//methods and statements
	const getPhotoData = async () => {
		await ExternalAPIs.getUploadedPhotos().then((res) => setUploadedPhotos(res));
	};

	const handleImageClick = (id) => {
		console.log("Home - clickedPhotoId", id);

		if (selectedPhotosArr.length >= 9) {
			return selectedPhotosArr.includes(id)
				? setSelectedPhotosArr(selectedPhotosArr.filter((item) => item !== id))
				: GlobalMethods.showNotification("warning", "Please select 9 photos only");
		}

		selectedPhotosArr.includes(id)
			? setSelectedPhotosArr(selectedPhotosArr.filter((item) => item !== id))
			: setSelectedPhotosArr((prevState) => [...prevState, id]);
	};

	//global logs
	console.log("Home - uploadedPhotos", uploadedPhotos);
	console.log("Home - selectedPhotosArr", selectedPhotosArr);

	return (
		<>
			<div>
				{showSpin && <Spinner text='Loading images' />}

				<SelectHeader
					text='Select 9 photos from uploaded photos to create the photo grid!'
					size='4rem'
					width='100%'
					margin='5% 0% 3% 0%'
				/>

				{selectedPhotosArr.length >= 9 && (
					<CreateGridBtn
						text='Order the selection'
						to='/order-photos'
						photos={selectedPhotosArr}
						save={false}
						icon={<BorderInnerOutlined />}
					/>
				)}

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
												onClick={() => handleImageClick(photo.picture)}
												style={
													selectedPhotosArr.includes(photo.picture)
														? { opacity: 0.5 }
														: { opacity: 1 }
												}
												alt={photo.timestamp}
												title={photo.timestamp}
												onLoad={() => setShowSpin(false)}
												src={photo.picture}
												className='image'
											/>
										</Card>
										{selectedPhotosArr.includes(photo.picture) && (
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
