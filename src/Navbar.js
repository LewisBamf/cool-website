import React, { Component } from "react"
import './navbar.css';
export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="navbar">
        <svg view-box="50px 50px">
          <image href="/assets/logo.svg" alt="logo" className="logo" />
        </svg>

        <div className="nav-links">
          <h2>home</h2>
          <h2>pricing</h2>
          <h2>contact</h2>
          <h2>about us</h2>
        </div>
      </div>
    )
  }
}