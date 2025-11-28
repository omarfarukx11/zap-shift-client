import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';




const GoogleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

    const [user , setUser] = useState([])

    const registerUser = (email , password) => {
     return createUserWithEmailAndPassword( auth, email , password)
    }
    
    const singInUser = (email , password) => {
      return signInWithEmailAndPassword(auth , email , password)
    }
    
    const googleSingIn = () => {
      return signInWithPopup(auth, GoogleAuthProvider)
    }
    







    const authInfo = {
        registerUser,
        singInUser,
        user,
        setUser,
        googleSingIn,

    }
    return (
        <AuthContext value={authInfo}>
            {
                children
            }
        </AuthContext>
    );
};

export default AuthProvider;