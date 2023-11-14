import React from "react";


const SignUp = ()=>{


    return(
        <div className="signup">
            <h4>Register Here</h4>
            <form>
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="email"/>
                <input type="number" placeholder="mobileNum"/>
                <input type="text" placeholder="password"/>
                <input type="text" placeholder="confirm password" />
                
                <button>SignUp</button>
                <h4>Already have an account?</h4>
                <span>Click here</span>
            </form>
        </div>
    )
}

export default SignUp