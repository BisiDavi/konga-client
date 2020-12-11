import React from "react";
import { LazyLoadImage } from "../../imports";
import { Paper } from "@material-ui/core";
import classes from "./banner1.module.css";

const imgPublicID = ["fitness_deals_e9roda", "fragrance_hku6bl"];

const AdsBanner = () => {
  return (
    <div className={classes.Banner}>
      <Paper className={classes.Paper}>
        {imgPublicID.map(publicID => (
          <LazyLoadImage
            key={publicID}
            width="100%"
            publicId={`konga/${publicID}`}
          />
        ))}
      </Paper>
    </div>
  );
};

export default AdsBanner;
