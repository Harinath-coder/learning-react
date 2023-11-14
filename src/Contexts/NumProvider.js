import NumContext from "./numContext";
import Contact from "../Components/Contact";

const NumProvider = ()=>{
    return(
        <NumContext.Provider value={0}>
            <Contact />
        </NumContext.Provider>
    )
}

export default NumProvider;