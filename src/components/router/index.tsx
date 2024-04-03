import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    Route,
  createBrowserRouter, createRoutesFromElements,
} from "react-router-dom";
import App from "../pages/App";
import PostPage from "../pages/PostPage";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },

    {
        path: '/posts/:id',
        element: <PostPage />
    }
]);


export default router