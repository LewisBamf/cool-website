import React from "react";
import '../App.css';
import Globegif from "../Globe.js";
import Workercards from "../Workers.js";
import Navbar from "../Navbar.js";
import Maintitle from "../Title.js";

const Home = () => {
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

  export default Home