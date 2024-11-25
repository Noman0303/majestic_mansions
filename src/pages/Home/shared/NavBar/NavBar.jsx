import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../../../Provider/AuthProvider'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged out successfully');
                toast.success('User logged out successfully!', { autoClose: 3000 });
            })
            .catch(error => {
                console.error(error)
                toast.error('Logout failed. Please try again.', { autoClose: 3000 });
            })
    }


    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink> </li>
        <li><NavLink to='/updateProfile'>Update Profile</NavLink> </li>
        <li><NavLink to='/userProfile'>user Profile</NavLink> </li>
        <li><NavLink to='/login'>Login</NavLink> </li>
        <li><NavLink to='/registration'>Registration</NavLink> </li>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-base lg:text-xl ">Majestic Mansions</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="navbar-end  ">
                    {
                        user ?
                            <>
                                <span >{user.email}</span>
                                <a className="btn btn-sm" onClick={handleLogOut}>Sign Out</a>
                            </>
                            :
                            <Link to='/' >
                            </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar