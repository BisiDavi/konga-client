import React from "react";
import { LazyLoadImage } from "../../imports";
import { Paper } from "@material-ui/core";
import classes from './banner1.module.css';

const ProductBanner = () => {
  return (
    <Paper className={classes.ProductBanner} style={{ margin: "20px", padding: "5px" }}>
      <LazyLoadImage publicId="konga/product_banner_vhyop6.WebP" width="100%" />
    </Paper>
  );
};

export default ProductBanner;
