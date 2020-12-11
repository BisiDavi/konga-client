import React from "react";
import { LazyLoadImage } from "../../../imports";

import classes from "./DealAdvertGif.module.css";

const gifs = [
  "konga/card_image_1_cquv3z.jpg",
  "konga/card_image_2_xj1fss.jpg",
  "konga/card_image_3_gpgurg.WebP",
  "konga/card_image_4_qiphyc.jpg"
];

const displayGifs = gifs.map(gif => (
  <div key={gif}>
    <LazyLoadImage publicId={gif} />
  </div>
));

const DealAdvertGif = () => {
  return <div className={classes.DealAdvertGif}>{displayGifs}</div>;
};

export default DealAdvertGif;
