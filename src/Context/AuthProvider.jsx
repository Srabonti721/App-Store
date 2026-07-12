import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';


export const AuthContext = createContext();


const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    console.log(loading,user);
    
    // GOOGLE SIGN IN
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    }
    // create user
    const CreateUSer = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //  loginUSer 
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout user
    const LogOutUser = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

const userInfo = {
    user,
    loading,
    setUser,
    setLoading, 
     googleSignIn,
     CreateUSer,
     loginUser,
     LogOutUser,
}

    return <AuthContext value={userInfo} >{children}</AuthContext>
}
export default AuthProvider;
