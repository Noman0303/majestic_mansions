import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Root from '../layouts/Root/Root';
import Home from '../pages/Home/Home';
import UserProfile from '../pages/userProfile/UserProfile';
import Registration from '../pages/registration/Registration';
import Login from '../pages/login/Login';
import AboutUs from '../pages/AboutUs/AboutUs';
import UpdateProfile from '../pages/updateProfile/UpdateProfile';
import Contact from '../pages/contact/Contact';
import Jobs from '../pages/jobs/Jobs';
import EstateDetails from '../pages/Estate_Details/EstateDetails';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('../categories.json')
            },
            {
                path: "/estate/:id",
                element: <PrivateRoute>
                <EstateDetails></EstateDetails>
                </PrivateRoute>,
                loader: () => fetch('../categories.json')

            },
            {
                path: "/updateProfile",
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>


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
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/jobs",
                element: <Jobs></Jobs>
            }
        ]
    },
]);


export default router;
