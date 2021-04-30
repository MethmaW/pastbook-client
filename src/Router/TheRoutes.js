import React, { Suspense } from "react";
import {
	HashRouter,
	Redirect,
	Route,
	Switch,
	BrowserRouter as Router,
} from "react-router-dom";
import publicPaths from "./publicPaths";
import privatePaths from "./privatePaths";
import ProtectedRoute from "./ProtectedRoute";
import { LoadingOutlined } from "@ant-design/icons";

const TheRoutes = () => {
	const loading = <LoadingOutlined />;
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
										isAuth={true}
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

export default TheRoutes;
