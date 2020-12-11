import React from "react";
import classes from "./groupcard.module.css";
import { LazyLoadImage } from "../../imports";

const imgPublicID = [
  "konga/beauty_health_fjln6j.png",
  "konga/drinks_ajrad7.webp",
  "konga/agricultural_product_bs3xft.webp",
  "konga/small_appliances_gu07kx.webp",
  "konga/power_a6bcfj.webp",
  "konga/baby_kids_toys_zo4u0k.webp"
];

const GroupCard = () => {
  return (
    <div className={classes.groupCard}>
      {imgPublicID.map(publicID => (
        <LazyLoadImage key={publicID} publicId={publicID} width="200px" />
      ))}
    </div>
  );
};

export default GroupCard;
