import { createContext, useState, useEffect } from "react";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider=({children})=>{

    const contextData = {name : "Guest"}

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}