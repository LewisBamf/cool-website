import React, { Component } from "react";
import './App.css';

import Workercards from "./Workers.js";
import Navbar from "./Navbar.js";
import Maintitle from "./Title.js";
import Globe from './Globe.js';
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <navbar />

        <div className="page-grid">
          <div className="grid-item">
            <Maintitle />
            <Globegif />
          </div>

          <div className="grid-item">
            <Workercards />
          </div>
        </div>
      </>
    )
  }
}