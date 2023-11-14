import React from "react";
import { useState } from "react";

const About = ()=>{

    const [val, setVal] = useState(0);

    function handleClick(){
        console.log(val)
        setVal(val+1);

      
    }

    return(
        <div>
            
            <h1>About page </h1>
            <button onClick={handleClick}>{val}</button>
           
        </div>
    )
}

export default About;