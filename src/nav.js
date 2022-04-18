import React from "react";
import { Link } from "react-router-dom";


function Nav(){
    return(<div className="nav navbar">
    <li className="nav-item">
      <a className="nav-link " href="/">Home</a>
    </li>
    <ul className="nav navend">
      <li className="nav-item">
        <a className="nav-link nvnd" to="/Contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link nvnd" to="/About">About us</a>
      </li>
    </ul>


  </div>)
}

export default Nav;