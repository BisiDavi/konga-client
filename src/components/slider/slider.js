import React from "react";
import { Carousel } from "react-responsive-carousel";
import { LazyLoadImage } from "../../imports";
import classes from "./slider.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slidersPublicId = [
  "konga/carousel_banner_7_cgy7tl.WebP",
  "konga/carousel_banner_1_w6zsf6.WebP",
  "konga/carousel_banner_6_q8txxl.WebP",
  "konga/carousel_banner_8_t335cf.WebP",
  "konga/carousel_banner_4_q9dfw8.WebP",
  "konga/carousel_banner_5_iyw3ou.WebP",
  "konga/carousel_banner_3_ld3ofh.WebP",
  "konga/carousel_banner_2_yktyg4.WebP"
];

const displaySlider = slidersPublicId.map(imageID => (
  <div key={imageID}>
    <LazyLoadImage publicId={imageID} />
  </div>
));

const Slider = props => {
  // const { loading = true } = props;

  return (
    <Carousel
      className={classes.Carousel}
      autoPlay
      showStatus={false}
      infiniteLoop
      useKeyboardArrows
      transitionTime={1000}
      showThumbs={false}
    >
      {displaySlider}
    </Carousel>
  );
};
export default Slider;
