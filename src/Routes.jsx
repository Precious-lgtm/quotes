import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";

// Pages
import App from "./App.jsx";
import Response from "./pages/Response.jsx";
import Terms from "./pages/Terms.jsx";
import Review from "./pages/Review.jsx";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/quote-response',
                element: <Response />
            },
            {
                path: '/quote-response-1',
                element: <Terms />
            },
            {
                path: '/quote-response-2',
                element: <Review />
            }
        ]
    }
]);

export default Routes;