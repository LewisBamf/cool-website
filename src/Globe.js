import React from "react";
import './globe.css'; 
import spinningGlobe from './spinning-globe.gif'; // Import the image as a variable


const Globegif = () => {
    return ( 
      <img src={spinningGlobe} alt="spinning globe gif" className="globe-gif"/>
    );
  }

  export default Globegif;
