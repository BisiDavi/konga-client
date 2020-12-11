import React, {useState} from "react";

import { LazyLoadImage } from "../../imports";

import classes from "./hovercard.module.css";

const HoverCard = props => {
  const [showDetails, setShowDetails] = useState(true);
  const onmouseEnter = () => setShowDetails(false);
  const onmouseLeave = () => setShowDetails(true);

  const subCategory = props.subCategories.slice(0, 3);
    
  return (
    <div className={classes.Hovercard} 
      onMouseEnter={onmouseEnter}
    onMouseLeave={onmouseLeave}
      >
      {(showDetails) 
      ?(
      <span className={classes.ProductImg}>
        <LazyLoadImage
          publicId={props.imgsrc}
          width={props.width}
          imgheight={props.imgheight}
        />
        <span className={classes.Product_name}>
        <h3>{props.name}</h3>
        </span>
      </span>
      ) 
      :(<div className={classes.Showonhover}>
        <div className={classes.Header}>
          <div><h4>{props.name}</h4></div>
        <LazyLoadImage
            publicId={props.thumbnail}
            width="70%"
          />
        </div>
        <div className={classes.body}>
          {subCategory.map(subcategory => (
            <li key={subcategory}>{subcategory}</li>
          ))}
        </div>
      </div>)   }
    </div>
  );
};

export default HoverCard;
