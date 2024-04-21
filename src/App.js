import React, { Component } from "react";
import './App.css';
import Globegif from "./Globe.js";
import Workercards from "./Workers.js";
import Navbar from "./Navbar.js";
import Maintitle from "./Title.js";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="page-grid">
          <div className="grid-item">
            <Maintitle />
            <Globegif />
          </div>
        </div>

        <div className="grid-item Workercards">
          <Workercards />
        </div>
      </>
    )
  }
}
