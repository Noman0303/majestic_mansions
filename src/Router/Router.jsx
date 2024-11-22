import React from 'react'
import {createBrowserRouter} from "react-router-dom";

import Root from '../layouts/Root/Root';
import Home from '../pages/Home/Home';
import UpdateProfile from '../pages/Home/updateProfile/UpdateProfile';
import UserProfile from '../pages/userProfile/UserProfile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/updateProfile",
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: "/userProfile",
                element: <UserProfile></UserProfile>
            }
        ]
    },
]);


export default router;
