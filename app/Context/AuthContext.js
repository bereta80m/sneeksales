"use client"
import { AuthContext } from "./useAuth";




const AuthProvider = ({children})=>{
    const hello = "Hello world!";
    
    return(
        <AuthContext.Provider value={hello}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;


