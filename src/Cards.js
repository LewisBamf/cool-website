import React from "react";
import { Slide } from 'react-awesome-reveal'
import './priceCards.css';

const PriceCards = () => {
    return(
    <Slide direction="left" cascade={true} triggerOnce={true}>
        <div className="priceCards grid-item">
        <div className="priceCard">

</div>
<div className="priceCard">

</div>
<div className="priceCard">

</div>
        </div>
    </Slide>
    )
}

export default PriceCards;