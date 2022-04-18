import React from "react";


function Signin(){
    return(
        <div>
        <form className="signup" method="post">
          <h2 className="regtext">Login</h2>
          <input type="text" className="signupelements" name="email" placeholder="E-mail" />
          <input type="password" name="password" className="signupelements" placeholder="Password" />
          <button type="submit" className=" btn-outline-primary signupelements">Login</button>
          <p>
            Not registered yet?<br /><a href="Signup">Create an account</a>
          </p>


        </form>
        </div>
    )
}
export default Signin;