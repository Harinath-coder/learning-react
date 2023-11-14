import React from "react";
import { useState } from "react";

const Panel = ({title, desc})=>{

    const [isShow, setShow] = useState(false)

    function handleClick(){
        if(isShow){
            setShow(false)
        }else{
            setShow(true)
        }
    }

    return(
        <div className="panel">
            <section>
                <h1>{title}</h1>
                {
                    isShow && <p>{desc}</p>
                }
                <button onClick={handleClick}>show desc</button>
            </section>
        </div>
    )
}

export default Panel;