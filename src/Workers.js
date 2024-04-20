import React, { Component } from "react"
import './workers.css'
export default class Workercards extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </>
    )
  }
}