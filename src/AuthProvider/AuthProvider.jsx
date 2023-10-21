/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './_firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const Provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // user sign in setup 
    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // user sing in with google
    const gooogleSignIn = () =>{
        setLoading(true)
        signInWithPopup(auth,Provider)
        .then(result => {
            console.log(result)
        })
        .then(error=>{
            console.log(error)
        })
    }

    const logOut =()=>{
        setLoading(true)
       return signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        gooogleSignIn ,
        loading,
        logOut 
    }

    useEffect(()=>{
        onAuthStateChanged(auth,currentUser =>{
            console.log("current user is available",currentUser)
            setUser(currentUser)
            setLoading(false)
        })
    },[])
    return (
        <AuthContext.Provider  value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;