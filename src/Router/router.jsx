import React from 'react';
import { createBrowserRouter } from 'react-router';
import ErrorPage from '../Components/ErrorPage';
import Root from '../Components/Root';

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        Component: Root,
        children:[
            {
                index:true,
                
            }
        ]
    },

]);

export default router;