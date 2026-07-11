import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

const userInfo = {
    email:"mona@tona.com"
}

    return <AuthContext value={userInfo} >{children}</AuthContext>
}
export default AuthProvider;
