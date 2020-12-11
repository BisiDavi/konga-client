import React from "react";
import { Paper } from "@material-ui/core";
import { LazyLoadImage } from "../../imports";
import classes from "./categoryBanner.module.css";

const bannerData = [
  {
    img: "fashion_category_uizttw",
    category: "Dresses for Her",
    subcategory: "At Unbeatable Prices"
  },
  {
    img: "electronic_appliances_i0jyn7",
    category: "Large Appliances",
    subcategory: "For your Home"
  },
  {
    img: "phone_accessories_q1ihgb",
    category: "Phones Accessories",
    subcategory: "Up to 70% Off"
  },
  {
    img: "smart_tvs_usrktc",
    category: "Small Televisions",
    subcategory: "At Unbeatable Prices"
  }
];

const CategoryBanner = () => {
  return (
    <div className={classes.CategoryBanner}>
      {bannerData.map(bData => (
        <Paper key={bData.category}>
          <LazyLoadImage
            publicId={`konga/${bData.img}.WebP`}
            width="100%"
            imgheight="50%"
          />
          <div className={classes.Details}>
            <h3>{bData.category}</h3>
            <p>{bData.subcategory}</p>
            <h5>SHOP NOW &gt; </h5>
          </div>
        </Paper>
      ))}
    </div>
  );
};

export default CategoryBanner;
