import React, { Component } from "react"
import './title.css';
export default class Maintitle extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <h1>
          get world class
          <br></br>
          <span className="epic-text">marketing</span>
          <br></br>
          for low prices
        </h1>
      </>
    )
  }
}