import React, { useState, useEffect } from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./style.css"

import { themes, ThemeContext } from "./Contexts/themeContext";

//components
import SignUp from "./Components/SignUp";
import Login from "./Components/Login"
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Panel from "./Components/Panel";

const App = ()=>{

  const [theme, setTheme] = useState(themes.light);

  function handleTheme(){
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
  }

  const body = document.body;

  useEffect(()=>{
    switch (theme){
      case themes.light:
        body.classList.remove('bg-dark')
        body.classList.add('bg-light')
        break;
      case themes.dark:
        body.classList.remove('bg-light')
        body.classList.add('bg-dark')
        break;
      default:
        body.classList.add('bg-light')
        
    }
  }, [theme]);

  return(
    <div>
      <ThemeContext.Provider value={{theme, handleTheme}}>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </BrowserRouter>
  </ThemeContext.Provider>

  <Panel title='panel 1' desc='panel 1 desc' />
  <Panel title='panel 2' desc='panel 2 desc' />
    </div>
  )
}

export default App;