import React from "react";
import { useContext } from "react";

//components
import NumContext from "../Contexts/numContext";

const Contact = (props)=>{

    const {val} = useContext(NumContext);
    
    return(
        <div>
            this is contact page, {props.value}
            <h1>{val} number value</h1>
        </div>
    )
}

export default Contact;