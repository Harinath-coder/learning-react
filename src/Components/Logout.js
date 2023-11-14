import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ()=>{

    const navigate = useNavigate();

     function handleLogout(){
        window.localStorage.clear()
        navigate('/')
    }

    return(
        <button className="sign-out" onClick={handleLogout}>Sign out</button>
    )
}

export default Logout;