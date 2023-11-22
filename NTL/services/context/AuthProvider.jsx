
import React, { useState } from 'react'

const AuthContext = React.createContext();


const AuthProvider = ({children}) =>{
    
   const [authenticate, setAuthenticate] = useState(false)
    
    return(
        
        <AuthContext.Provider
            value={{
                authenticate
            }}
        >{children}</AuthContext.Provider>
    )
}
export{AuthProvider}
export default AuthContext;