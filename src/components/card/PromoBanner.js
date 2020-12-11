import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import styles from './PromoBanner.module.css';

import { LazyLoadImage } from "../../imports";

const useStyles = makeStyles({
  leftSidebar: {
    height: "300px",
    width: "300px",
    position: "fixed",
    bottom: 0,
    left: 0,
    zIndex:1000
  },
  banner: {
    width: "100%",
    position: "relative"
  },
  headerCancelButton: {
    top: "5px",
    color: "white",
    right: "20px",
    cursor: "pointer",
    zIndex: "100",
    position: "absolute",
    height: "25px",
    width: "25px",
    background: "black",
    borderRadius: "50%"
  },
  cancelSidebarButton: {
    left: "255px",
    color: "white",
    width: "25px",
    cursor: "pointer",
    height: "25px",
    zIndex: "10000",
    position: "fixed",
    bottom: "260px",
    background: "black",
    borderRadius: "50%"
  }
});


//
const PromoBanner = ({ bannerImage, bannerHeight }) => {
  const [showPromo, setShowPromo] = useState({
    promo: true,
    button: "grid"
  });
  const classes = useStyles();

  const showPromoHandler = () =>
    setShowPromo({
      promo: false,
      button: "none"
    });

  const BannerStyle =
    bannerHeight === "40px" ? classes.banner : classes.leftSidebar;

  const cancelButtonStyle =
    bannerHeight === "40px"
      ? classes.headerCancelButton
      : classes.cancelSidebarButton;

  return (
    <div className={styles.PromoButton}>
      <div className="position-relative">
        <button
          style={{ display: showPromo.button }}
          className={cancelButtonStyle}
          onClick={showPromoHandler}
        >
          X
        </button>
        {showPromo.promo ? (
          <LazyLoadImage
            height={bannerHeight}
            className={BannerStyle}
            publicId={bannerImage}
          />
        ) : null}
      </div>
    </div>
  );
};

export default PromoBanner;
