import { Home } from "../rootImports";

/**
 * All the public routes
 * @const publicPaths
 */

const publicPaths = [
	{
		path: "/home",
		exact: true,
		name: "Home",
		component: Home,
	},
];

export default publicPaths;
