import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../css/Navbar.css";

function Header () {
  return (
<>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">Short Now</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
        <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/history">History</Link>
        </li>
     
      
      </ul>
      
    </div>
  </div>
</nav>


</>

  )
};
export default Header