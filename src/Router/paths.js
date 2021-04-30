import React from "react";
import { Home, Selection } from "../rootImports";

const routes = [
	{
		path: "/home",
		exact: true,
		name: "Home",
		component: Home,
	},
	{
		path: "/selection",
		exact: true,
		name: "Selection",
		component: Selection,
	},
];

export default routes;
