import React, { createContext } from 'react';
import useFirebse from '../Hook/useFirebse';


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const allContext = useFirebse();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;