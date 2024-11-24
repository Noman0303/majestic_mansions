import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user,setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password);
    }

    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword (auth,email,password);
    }

    const signInWithGoogle = ()=>{
        return signInWithPopup (auth, googleProvider)
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('user on auth state change',currentUser);
        });
        return () =>{
            unSubscribe();
        }
    },[])


    const authInfo = {
        user,
        createUser,
        signInUser,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider