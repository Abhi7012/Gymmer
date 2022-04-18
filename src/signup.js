import React from "react";

function Signup(){
    return(
        <div className="flex-container">
      <div className="row">
        <div className="col-md-6 leftsidehead">

          <img src="fitnesspng.png" className="center" />

        </div>
        <div className="col-md-6">
          <form className="signup" method="post">
            <h2 className="regtext">SignUp</h2>
            <input type="email" className="signupelements" name="Email" placeholder="E-mail" />
            <input type="Mobile" className="signupelements" name="Number" placeholder="Mobile No" />

            <input type="password" name="createpassword" className="signupelements" placeholder="Password" />
            <input type="password" name="password" className="signupelements" placeholder="confirm-Password" />
            <button type="submit" className=" btn-outline-primary signupelements" >Sign up</button>
            <div className="codegen signupelements">

            </div>
            <p>
              Already Registered ?<br /><a href="/">Sign in</a>
            </p>


          </form>
        </div>
      </div>
    </div>
    )
}