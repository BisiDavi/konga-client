import React from "react";
import classes from "./productcard.module.css";
import { LazyLoadImage } from "../../imports";

const ProductCard = props => {
  const name = props.name;
  let shortName =
    name.length >= 30 ? `${name.slice(0, name.length - 6)}...` : name;
  const amountSaved = props.formerPrice - props.price;

  const saved = props.formerPrice === null ? `` : `You save ₦${amountSaved}`;

  const oldPrice = props.formerPrice === null ? "" : `₦${props.formerPrice}`;
  return (
    <div
      className={classes.productCard}
      style={{ height: props.height, width: props.cardWidth }}
    >
      <LazyLoadImage
        publicId={props.imgsrc}
        width={props.width}
        imgheight={props.imgheight}
      />
        <div className={classes.pricedetails}>
          <h3>{shortName}</h3>
          <div className={classes.price}>
            <h4>₦{props.price}</h4>
            <p>{oldPrice}</p>
          </div>
          <h6>{saved}</h6>
        </div>
    </div>
  );
};

export default ProductCard;
