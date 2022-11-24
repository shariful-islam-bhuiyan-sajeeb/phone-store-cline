import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const [user,setUser] = useState('')


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut(auth)
    }


    const authInfo = {login, createUser , signInGoogle , logOut, user} 

    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;