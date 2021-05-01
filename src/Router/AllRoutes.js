import React, { Suspense, useState, useEffect } from "react";
import {
	HashRouter,
	Redirect,
	Route,
	Switch,
	BrowserRouter as Router,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userGrid } from "../actions/index";
import * as InternalAPIs from "../utils/api/internalAPIs";
import publicPaths from "./publicPaths";
import privatePaths from "./privatePaths";
import ProtectedRoute from "./ProtectedRoute";
import { LoadingOutlined } from "@ant-design/icons";

const AllRoutes = () => {
	//varaibles
	const dispatch = useDispatch();
	const loading = <LoadingOutlined />;
	let userAuth = false;

	//redux state
	const auth = useSelector((state) => state.isAuthReducer);

	//state
	const [savedGrid, setSavedGrid] = useState([]);

	//useEffect calls
	useEffect(() => {
		getGridData();
	}, []);

	//methods and statements
	const getGridData = async () => {
		await InternalAPIs.getGrid().then((res) => {
			console.log("res", res);
			if (res.data.length !== 0 && res.data[0].photos.length === 9) {
				setSavedGrid(res.data[0].photos);
				dispatch(userGrid(res.data[0].photos));
			}
		});
	};

	userAuth = savedGrid.length > 0 || auth;

	//global logs
	console.log("AllRoutes - auth", savedGrid);

	return (
		<>
			<HashRouter>
				<Suspense fallback={loading}>
					<Router>
						{savedGrid.length > 0 && <Redirect from='/' to='/photo-grid' />}
						<Switch>
							{publicPaths.map((route, i) => {
								return (
									route.component && (
										<Route
											key={i}
											path={route.path}
											exact={route.exact}
											name={route.name}
											component={route.component}
										/>
									)
								);
							})}

							{privatePaths.map((route, i) => {
								return (
									<ProtectedRoute
										key={i}
										path={route.path}
										exact={route.exact}
										component={route.component}
										isAuth={userAuth ? true : false}
									/>
								);
							})}

							<Redirect from='/' to='/home' />
						</Switch>
					</Router>
				</Suspense>
			</HashRouter>
		</>
	);
};

export default AllRoutes;
