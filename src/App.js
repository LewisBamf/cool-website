import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home.js';
import Pnf from './pages/404.js';
import Pricing from './pages/pricing.js';

export default class App extends Component {
  render() {
    return (
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<Pnf />}/>
          <Route path='priceing' element={<Pricing />}/>
        </Routes>

        <Routes>
          
        </Routes>

      </Router>
    )
  }
}
