import { createContext, useEffect, useState } from "react";

export const ContexAuth= createContext(null)

const AuthContex=({children})=>{
    const [isAuth , setIsAuth]=useState(false)
   
    function LoginFunc(){
            setIsAuth(true)
    }
  
    useEffect(()=>{
        const acc = localStorage.getItem("accessToken");
        const rcc = localStorage.getItem("refreshToken");
        if(acc && rcc){
            setIsAuth(true)
        }
    },[])
    return <ContexAuth.Provider value={{isAuth,LoginFunc}}>{children}</ContexAuth.Provider>
}
export default AuthContex