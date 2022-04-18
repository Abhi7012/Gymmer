import React from "react";
import Signin from "./Signin";

function BodyMain(){
    return (
        <div className="flex-container">
    <div className="row">
      <div className="col-md-6 leftsidehead">

        <img src={process.env.PUBLIC_URL+"/fitnesspng.png"} alt="not loading" className="center" />

      </div>
      <div className="col-md-6">
        <Signin />
      </div>
    </div>
  </div>
    )
}

export default BodyMain;