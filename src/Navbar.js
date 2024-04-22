import React from "react";
import { Link } from "react-router-dom";
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
          <h2>
            <Link className="link" to="/">home</Link>
            </h2>
            <h2>
            <Link className="link" to="*">prices</Link>
            </h2>
            <h2>
            <Link className="link" to="*">contact</Link>
            </h2>
            <h2>
            <Link className="link" to="*">About us</Link>
            </h2>
        </div>
      </div>
      </>
    )
  }

  export default Navbar;