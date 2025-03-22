import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path:"/", // ✅ Default child route (Fix for "/")
                element: <Home/>,
            },
            {
                path: "orders",
                element: <div>Orders</div>,
            },
            {
                path: "about",
                element: <div>About</div>,
            },
            {
                path: "checkout",
                element: <div>checkout </div>,
            },
            {
                path: "dashboard",
                element: <div>dashboard</div>,
            },
            {
                path: "cart",
                element: <div>Cart</div>,
            },
        ],
    },
]);

export default router;
