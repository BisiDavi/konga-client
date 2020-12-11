import React from 'react'
import { Image } from "cloudinary-react";
import LazyLoad from "react-lazyload";
import Skeleton from "@material-ui/lab/Skeleton";

const SkeletonPlaceholder = (props) => {
    return (
        <div>
           <Skeleton
            animation="wave"
            variant="rect"
            width="100%"
            >
            <LazyLoad height={props.height} once>
                <Image
                    height={props.imgheight}
                    width={props.width}
                    publicId={props.publicId}
                    className={props.className}
                />
            </LazyLoad>
            </Skeleton> 
        </div>
    )
}

export default SkeletonPlaceholder
