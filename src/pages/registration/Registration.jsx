import React, { useContext, useState } from 'react'
import NavBar from '../Home/shared/NavBar/NavBar'
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEye,FaEyeSlash } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Registration = () => {
    
    const {createUser} = useContext(AuthContext);
    const [showPassword,setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        // console.log('form submitted')
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;
        console.log(name, email, password, photoURL)

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters of longer',{ autoClose: 2000 });
            return
            
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one upper case character',{ autoClose: 2000 });
            return
            
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Your password should have at least one lower case character',{ autoClose: 2000 });
            return
            
        }
        
        // create user in Firebase

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            toast.success('Registration successful! Welcome!', { autoClose: 3000})
        })
        .catch(error =>{
            console.error(error);
            toast.error('Registration not successful. Please try again!', { autoClose: 3000 });
        })
    };

    return (
        <div>
            <NavBar></NavBar>

            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse " >
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Welcome to Majestic Mansions!</h1>
                        <p className="py-6">
                        We're delighted to have you here. Joining our community brings you one step closer to experiencing the luxury and comfort of Majestic Mansions. Our registration process is quick and easy, ensuring that you can start enjoying the benefits without any hassle.
                        </p>
                        <h2 className="text-4xl font-bold">Why Register?</h2>
                        <ul className="py-6">
                            <li><p><span className='font-semibold'>Exclusive Access:</span> Get early access to our premium listings and special promotions.</p></li>
                            <li><p><span className='font-semibold'>Personalized Experience:</span> Customize your preferences and receive recommendations tailored just for you.</p></li>
                            <li><p><span className='font-semibold'>Stay Informed:</span> Receive updates on new properties, events, and special offers.</p></li>
                        </ul>
                        <p><span className='font-semibold'>Ready to Join? </span> 
                        <br /> Fill out the form with your details, and in just a few clicks, you will be part of the Majestic Mansions family. We value your privacy and promise to keep your information secure.</p>

                        <p className='py-6'><span className='font-semibold'>Let’s Get Started</span> Your journey to finding the perfect home begins here. We can’t wait to welcome you!</p>

                    </div>
                    <div className="card bg-base-100 w-full shadow-2xl">
                        <form className="card-body" onSubmit={handleRegister}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type={showPassword? "text" : "password"}
                                name='password' 
                                placeholder="password" 
                                className="input input-bordered" 
                                required />

                                <span className='absolute bottom-4 right-3' onClick={()=>setShowPassword(!showPassword)}>
                                    {
                                        showPassword? <FaEyeSlash />:<FaEye />
                                    }
                                </span>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>

                            <p className='text-center font-semibold mb-4 text-lg'>Already Have an Account! Please
                                <Link className='text-blue-700' to="/login"> Login</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Registration