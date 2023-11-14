import React, { useContext } from "react";
import {NavLink} from "react-router-dom";
import { ThemeContext } from "../Contexts/themeContext";

//componenets
import Logout from "./Logout";
import Sidebar from "./Sidebar";

const Home = ()=>{

    const {theme, handleTheme} = useContext(ThemeContext);

    return(
        <div>
            <div className="navbar">
            <NavLink className='navItems' to="/home">Home</NavLink>
            <NavLink className='navItems' to="/about">About us</NavLink>
            <NavLink className='navItems' to="/contact">Contact us</NavLink>

            <Logout />

            <button onClick={handleTheme}>ThemeSwitcher {theme}</button>
            </div>
            <Sidebar />
        </div>
    )
}

export default Home;