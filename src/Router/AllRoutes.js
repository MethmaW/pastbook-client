import React, { Suspense } from "react";
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

	//redux state
	const auth = useSelector((state) => state.isAuthReducer);

	//state

	//useEffect calls
	// useEffect(() => {
	// 	InternalAPIs.AllRoutes
	// }, [input])

	//methods and statements

	//global logs
	console.log("AllRoutes - auth", auth);

	return (
		<>
			<HashRouter>
				<Suspense fallback={loading}>
					<Router>
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
										path={route.path}
										exact={route.exact}
										component={route.component}
										isAuth={auth}
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
