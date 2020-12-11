import React from "react";

import classes from "./header.module.css";
import { Navbar, KongaCategory, Navigation, PromoBanner } from "../../imports";

const Header = () => {
  return (
    <div className={classes.header}>
      <span>
        <PromoBanner
          bannerImage="konga/konga_banner_kfmbp8.WebP"
          bannerHeight="40px"
        />
      </span>
      <KongaCategory />
      <Navigation />
      <Navbar />
    </div>
  );
};

export default Header;
