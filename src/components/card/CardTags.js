import React from "react";
import { Card } from "../../imports";
import classes from "./cardtags.module.css";

const cardImagesID = [
  { path: "konga/konga_travel_card_zncs9s.WebP", width: "100px" },
  { path: "konga/miniService_kongaPay_zhswha.jpg", width: "150px" },
  { path: "konga/buy_bulk_ntxmeh.WebP", width: "160px" },
  { path: "konga/flash_f6b0bd.WebP", width: "150px" },
  { path: "konga/official_stores_yarvle.WebP", width: "150px" },
  { path: "konga/store_locator_mxy89s.WebP", width: "150px" }
];

const CardTags = () => {
  return (
    <div className={classes.cardtags}>
      {cardImagesID.map(imgID => (
        <Card
          key={imgID.path}
          publicId={imgID.path}
          height="50px"
          imgWidth={imgID.width}
        />
      ))}
    </div>
  );
};

export default CardTags;
