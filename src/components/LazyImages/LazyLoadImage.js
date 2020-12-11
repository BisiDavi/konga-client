import React from "react";
import { Image } from "cloudinary-react";
import LazyLoad from "react-lazyload";
import Skeleton from "@material-ui/lab/Skeleton";

const LazyLoadImage = props => {
  return (
    <LazyLoad
      height={props.height}
      placeholder={<Skeleton variant="rect" width="100%" height="150px" />}
      once
    >
      <Image
        height={props.imgheight}
        width={props.width}
        publicId={props.publicId}
        cloudName="verrb-inc"
        className={props.className}
      />
    </LazyLoad>
  );
};

export default LazyLoadImage;
