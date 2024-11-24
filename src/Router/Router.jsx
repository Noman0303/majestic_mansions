import React from 'react'
import {createBrowserRouter} from "react-router-dom";

import Root from '../layouts/Root/Root';
import Home from '../pages/Home/Home';
import UpdateProfile from '../pages/Home/updateProfile/UpdateProfile';
import UserProfile from '../pages/userProfile/UserProfile';

import Registration from '../pages/registration/Registration';
import Login from '../pages/login/Login';

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
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            }
        ]
    },
]);


export default router;
