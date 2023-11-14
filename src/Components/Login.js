import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Login = ()=>{

    const [userCredential, setUserCredentail] = useState({username:"", password:""})

    const {username, password} = userCredential

    const [errorMsg, setErrorMsg] = useState(null);
    
    const navigate = useNavigate()
   
    function handleError(data){
        setErrorMsg(data)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(userCredential)

        if(!username || !password){
            alert("all feild are mandatory")
        }else{
            axios.post("http://localhost:8081/api/v1/login", {username, password})
            .then((response)=> {
                console.log(response)
                window.localStorage.setItem("token",response.data.token)
                window.localStorage.setItem("username", response.data.name)
                navigate('/home')
            })
            .catch((error)=>{
                
               handleError(error.response.data.message)
            })
        }
    }

    function handleInput(e){
        //console.log(e.target.value)
        setUserCredentail({...userCredential, [e.target.name]:e.target.value})
    }

    return(
        <div className="login">
            <div className="error">{errorMsg}</div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" value={userCredential.username} name="username" onChange={handleInput} />
                <input type="text" placeholder="password" name="password" value={userCredential.password} onChange={handleInput} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;