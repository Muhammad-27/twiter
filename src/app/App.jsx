import { useContext, useEffect, useState } from "react"

import"./menubar.css"


import MenuBar from "./Menubar";
import { ContexAuth } from "../contex/authContex";
import LoginPage from "../pages/login";


const App = () => {


    const { isAuth } = useContext(ContexAuth)
    return (
        <>
            {isAuth ? (<MenuBar />) : (
                <LoginPage />
            )}
        </>
    )
};
export default App