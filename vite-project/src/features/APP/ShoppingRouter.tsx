import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Shopping } from "./Shopping";
import ShoppingCartPage from "./ShoppingCartPage";


const myRouter = createBrowserRouter([
	{
		path: "/",
		// element: <Shopping/>,
		children: [
			{
				path: "/home",
				element: <Shopping/>,
			},
			{
				path: "/shoppingcart",
				element: <ShoppingCartPage />,
			},
		],
	},
]);

function RunRouter() {
	return (
			  <RouterProvider router={myRouter} />
	);
  }
  
  export default RunRouter;