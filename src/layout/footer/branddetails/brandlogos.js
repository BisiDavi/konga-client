import React from "react";
import classes from "./brandlogos.module.css";
import { LazyLoadImage } from "../../../imports";
import { Paper } from "@material-ui/core";

const logosPublicID = [
  "hp_z9guqa",
  "itec_efeme6",
  "Swiss_zffv9c",
  "apple_lz6hiq",
  "PZ_geay09",
  "samsung_gfcyfe",
  "henkkel_r1abpv",
  "Unilever_t9lq4n",
  "molflix_n45odx",
  "zinox_r4sofh",
  "tecno_p7xbot",
  "Nestle_lybhpo"
];

const Brandlogos = () => {
  return (
    <Paper className={classes.Brandlogo}>
      {logosPublicID.map(logoID => {
        const imgHeight = logoID === "hp_z9guqa" ? "60px" : "auto";
        const imgWidth = logoID === "hp_z9guqa" ? "60px" : "100%";
        return (
          <LazyLoadImage
            key={logoID}
            publicId={`konga/${logoID}.png`}
            width={imgWidth}
            imgheight={imgHeight}
          />
        );
      })}
    </Paper>
  );
};

export default Brandlogos;
