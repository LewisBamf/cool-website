import React, { Component } from "react";
import './globe.css';
export default class Globe extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <img src="spinning-glove.gif" alt="spinning globe gif" loop></img>
  }
}