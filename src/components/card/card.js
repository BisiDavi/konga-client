import React from "react";
import {LazyLoadImage} from '../../imports';

import classes from "./card.module.css";


const Card = (props) => {
  return (
    <div 
    style={{ height: props.height, width:props.cardWidth  }} className={classes.Card}>
      <LazyLoadImage 
      publicId={props.publicId} 
      width={props.imgWidth} />
    </div>
  );
};

export default Card;
