import React from "react";
import classes from "./popularcategory.module.css";
import {
  HoverCard,
  computer_accessories,
  phones_tablet,
  electronic,
  fashion,
  Home_kitchen,
  babytoys,
  wine,
  Beauty_Health_Personal_Care,
  Outdoor_Indoor_Games,
  Automotive
} from "../../imports";
import { Paper } from "@material-ui/core";

const hoverCardData = [
  {
    name: "Computers and Accessories",
    imgsrc: "Computers_bbard2.WebP",
    thumbnail: "computers_thumbnail_ggulg8.jpg",
    subCategories: computer_accessories
  },
  {
    name: "Phones and Tablet",
    imgsrc: "Phones_Tablets_nwa6n8.WebP",
    thumbnail: "phones-and-tablets_thumbnail_ikkzft.png",
    subCategories: phones_tablet
  },
  {
    name: "Electronics",
    imgsrc: "Electronics_szkpnd.webp",
    thumbnail: "electronics_thumbnail_wqe3jn.png",
    subCategories: electronic
  },
  {
    name: "Konga Fashion",
    imgsrc: "Fashion_dpetrl.WebP",
    thumbnail: "fashion_thumbnail_erujyb.jpg",
    subCategories: fashion
  },
  {
    name: "Home and Kitchen",
    imgsrc: "Home_Kitchen_z8pqof.webp",
    thumbnail: "home-kitchen_thumbnail_du4dad.jpg",
    subCategories: Home_kitchen
  },
  {
    name: "Baby, Kids and Toys",
    imgsrc: "baby_kids_vihyko.webp",
    thumbnail: "baby-kids-toys_thumbnail_tvbqsp.jpg",
    subCategories: babytoys
  },
  {
    name: "Wine & Other Categories",
    imgsrc: "Wines_hi2vls.webp",
    thumbnail: "other-categories_thumbnail_qwipou.jpg",
    subCategories: wine
  },
  {
    name: "Beauty,Health & Personal Care",
    imgsrc: "beauty_health_personal_care_l7wjxk.webp",
    thumbnail: "beauty-hc_thumbnail_gm1q4d.jpg",
    subCategories: Beauty_Health_Personal_Care
  },
  {
    name: "Sports and Fitness",
    imgsrc: "fitness_ambb1n.webp",
    thumbnail: "sports-and-fitness_thumbnail_uo8ydp.jpg",
    subCategories: Outdoor_Indoor_Games
  },
  {
    name: "Automotive",
    imgsrc: "Automobile_arorua.webp",
    thumbnail: "power-solutions_thumbnail_kcgjfi.jpg",
    subCategories: Automotive
  }
];

const Popularcategory = () => {
  return (
    <div className={classes.Popularcategory}>
      <div className={classes.Title}>
        <h1>Popular Categories</h1>
      </div>
      <Paper className={classes.Category}>
        {hoverCardData.map(cardData => (
          <HoverCard
            key={cardData.name}
            name={cardData.name}
            imgsrc={`konga/${cardData.imgsrc}`}
            width="100%"
            imgheight="50%"
            thumbnail={`konga/${cardData.thumbnail}`}
            subCategories={cardData.subCategories}
          />
        ))}
      </Paper>
    </div>
  );
};

export default Popularcategory;
