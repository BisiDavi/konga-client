import React from "react";
import classes from "./KongaCategory.module.css";
import { Grid } from "@material-ui/core";
import { LazyLoadImage } from "../../imports";

const kongaCategoryImageLink = [
  "konga/konga_travel_muxzo3.png",
  "konga/konga_drinks_qfk3eu.png",
  "konga/konga_groceries_uisz8w.png",
  "konga/konga_pay_snndke.png",
  "konga/kxpress_fnwn1q.png"
];

const displayCategories = kongaCategoryImageLink.map(category => (
  <Grid item key={category}>
    <LazyLoadImage
      className={classes.Category}
      imgheight="25"
      width="70"
      publicId={category}
    />
  </Grid>
));

const KongaCategory = () => {
  return (
    <Grid container className={classes.KongaCategory}>
      {displayCategories}
    </Grid>
  );
};

export default KongaCategory;
