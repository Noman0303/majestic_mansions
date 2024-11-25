import React, { useContext, useState } from 'react'
import NavBar from '../Home/shared/NavBar/NavBar'
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEye,FaEyeSlash } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    
    const {createUser} = useContext(AuthContext);
    const [showPassword,setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        // console.log('form submitted')
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

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

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Here</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleRegister}>
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
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Registration