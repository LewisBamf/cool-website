import React from "react";
import Navbar from "../Navbar";
import PriceCards from '../Cards.js';
import '../App.css';
import { motion } from "framer-motion";
import { Slide } from 'react-awesome-reveal'

const Pricing = () => {
    return(
   <>
    <Navbar />
    <div className="grid-item priceHERO">
    <h1 className="heroPrice">
        Tailored plans for...
        </h1>
    <motion.span className="specialTitle" whileHover={{scale: 1.3, translateZ: 50}}>
         <h1 className="everyTXT">everyone</h1>
    </motion.span>
    </div>
    <PriceCards />
    </>
    )
}

export default Pricing;