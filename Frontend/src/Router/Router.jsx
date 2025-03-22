import { createBrowserRouter,RouterProvider,} from "react-router";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path:"/",
                element:<h4>welcome Home developers </h4>
            },
            {
                path:"/orders",
                element:<div>Orders</div>
            },
            {
                path:"/about",
                element:<div>About</div>
            },

        ]
    },
]);

export default router;
