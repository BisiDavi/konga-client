import React from "react";
import { LazyLoadImage } from "../../imports";
import { Paper } from "@material-ui/core";
import classes from "./showcaseCard.module.css";

const ShowcaseCard = props => {
  const name = props.name;
  let shortName =
    name.length >= 30 ? `${name.slice(0, name.length - 6)}...` : name;
  const amountSaved = props.formerPrice - props.price;

  const saved = props.formerPrice === null ? `` : `You save ₦${amountSaved}`;

  const oldPrice = props.formerPrice === null ? "" : `₦${props.formerPrice}`;

  const percent =
    100 - Math.floor(parseInt((props.price / props.formerPrice) * 100, 10));

  const displayPercent = props.formerPrice ? `${percent} % off` : null;

  const noDiscount = "none";

  const discount = props.formerPrice ? `${classes.percentage}` : noDiscount;

  return (
    <Paper
      className={classes.ShowcaseCard}
      style={{ height: props.height, width: props.cardWidth }}
    >
      <div className={discount}>{displayPercent}</div>
      <LazyLoadImage
        width={props.width}
        height={props.imgheight}
        publicId={props.imgsrc}
      />
      <h3>{shortName}</h3>
      <div className={classes.price}>
        <h1>₦{props.price}</h1>
        <h5>{oldPrice}</h5>
        <p>{saved} </p>
      </div>
    </Paper>
  );
};

export default ShowcaseCard;
