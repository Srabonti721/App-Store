import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext();


const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    // GOOGLE SIGN IN
    const googleSignIn = () =>{
        return signInWithPopup(auth, GoogleProvider);
    }

const userInfo = {
    user,
     setUser,
     googleSignIn
}

    return <AuthContext value={userInfo} >{children}</AuthContext>
}
export default AuthProvider;
