import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "antd";
import { CheckOutlined } from "@ant-design/icons";

import * as ExternalAPIs from "../utils/api/externalAPIs";

const Home = () => {
	//states
	const [uploadedPhotos, setUploadedPhotos] = useState([]);
	const [nice, setNice] = useState([false, ""]);

	//useEffect calls
	useEffect(() => {
		ExternalAPIs.getUploadedPhotos().then((res) => setUploadedPhotos(res));
	}, []);

	//methods

	return (
		<>
			<div className='site-card-wrapper'>
				<Row>
					{uploadedPhotos.map((photo) => {
						return (
							<>
								<Col key={photo.id} xs={20} sm={16} md={12} lg={8} xl={8}>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											position: "relative",
										}}
										onClick={() => {
											console.log(photo.id);
											setNice([true, photo.id]);
										}}
									>
										<Card bordered={false}>
											{" "}
											<img
												style={
													nice[0] && nice[1] === photo.id
														? { width: "300px", height: "300px", opacity: 0.5 }
														: { width: "300px", height: "300px", opacity: 1 }
												}
												alt='example'
												src={photo.picture}
											/>
										</Card>
										<div
											style={{
												position: "absolute",
												top: "50%",
												left: "50%",
												transform: "translate(-50%, -50%)",
											}}
											class='centered'
										>
											<CheckOutlined />
										</div>
									</div>
								</Col>
							</>
						);
					})}

					{/* <Col xs={20} sm={16} md={12} lg={8} xl={6}>
						<div style={{ display: "flex", justifyContent: "center" }}>
							<Card bordered={false}>
								<img
									alt='example'
									src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
								/>
							</Card>
						</div>
					</Col>
					<Col xs={20} sm={16} md={12} lg={8} xl={6}>
						<div style={{ display: "flex", justifyContent: "center" }}>
							<Card bordered={false}>
								<img
									alt='example'
									src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
								/>
							</Card>
						</div>
					</Col>
					<Col xs={20} sm={16} md={12} lg={8} xl={6}>
						<div style={{ display: "flex", justifyContent: "center" }}>
							<Card bordered={false}>
								<img
									alt='example'
									src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
								/>
							</Card>
						</div>
					</Col> */}
				</Row>
			</div>
		</>
	);
};

export default Home;
