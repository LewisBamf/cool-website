import React from "react";
import logo from './logo.svg';
import './navbar.css';


const Navbar = () => {
    return (
        <>
      <div className="navbar">
        <svg view-box="50px 50px">
          <image href={logo} alt="logo" className="logo" />
        </svg>

        <div className="nav-links">
          <h2>home</h2>
          <h2>pricing</h2>
          <h2>contact</h2>
          <h2>about us</h2>
        </div>
      </div>
      </>
    )
  }

  export default Navbar;