import { Grid, Order } from "../rootImports";

/**
 * All the protected routes
 * @const privatePaths
 */

const privatePaths = [
	{
		path: "/photo-grid",
		exact: true,
		name: "Grid",
		component: Grid,
	},
	{
		path: "/order-photos",
		exact: true,
		name: "Order",
		component: Order,
	},
];

export default privatePaths;
