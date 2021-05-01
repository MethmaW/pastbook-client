import React, { Suspense, useState, useEffect } from "react";
import {
	HashRouter,
	Redirect,
	Route,
	Switch,
	BrowserRouter as Router,
} from "react-router-dom";
import * as InternalAPIs from "../utils/api/internalAPIs";
import publicPaths from "./publicPaths";
import privatePaths from "./privatePaths";
import ProtectedRoute from "./ProtectedRoute";
import { LoadingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const AllRoutes = () => {
	//varaibles
	const loading = <LoadingOutlined />;
	let userAuth = false;

	//redux state
	const auth = useSelector((state) => state.isAuthReducer);

	//state
	const [savedGrid, setSavedGrid] = useState([]);

	//useEffect calls
	useEffect(() => {
		InternalAPIs.getGrid().then((res) => setSavedGrid(res.data));
	}, []);

	//methods and statements
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
