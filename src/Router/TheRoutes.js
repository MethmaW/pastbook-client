import React, { Suspense } from "react";
import {
	HashRouter,
	Redirect,
	Route,
	Switch,
	BrowserRouter as Router,
} from "react-router-dom";
import paths from "./paths";

const TheRoutes = () => {
	const loading = (
		<div className='pt-3 text-center'>
			<div className='sk-spinner sk-spinner-pulse'></div>
		</div>
	);
	return (
		<>
			<HashRouter>
				<Suspense fallback={loading}>
					<Router>
						<Switch>
							{paths.map((route, i) => {
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
							<Redirect from='/' to='/home' />
						</Switch>
					</Router>
				</Suspense>
			</HashRouter>
		</>
	);
};

export default TheRoutes;
