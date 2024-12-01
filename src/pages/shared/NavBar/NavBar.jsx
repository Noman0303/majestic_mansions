import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../../Provider/AuthProvider'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isHovered, setIshovered] = useState(false);

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
        <li><NavLink to='/registration'>Registration</NavLink></li>

    </>


    return (
        <div className="navbar bg-base-200 rounded-xl">
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
                <a className=" text-base md:text-xl lg:text-2xl font-semibold">Majestic Mansions</a>
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
                            <div className="flex items-center space-x-4">
                                <span className='relative' onMouseEnter={() => setIshovered(true)} onMouseLeave={() => setIshovered(false)}>
                                    <img src={user.photoURL} className="rounded-full w-8 h-auto inline-block" />
                                    {isHovered && (
                                        <span className='absolute md:right-10 sm:right-6 lg:top-10 lg:left-0 w-auto p-1 text-xs text-white bg-black rounded-md'>
                                            {user.displayName}
                                        </span>
                                    )}
                                </span>
                                <a className="btn btn-sm lg:btn-base navbar-end lg:text-lg" onClick={handleLogOut}>Log Out</a>
                            </div>
                            :
                            <Link to='/login' >
                                <button className='btn btn-sm lg:btn-base lg:text-lg'>Log in</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar