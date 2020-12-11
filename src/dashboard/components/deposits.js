import React from "react";
// import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./title";

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  },
  admin: {
    fontSize: "30px"
  }
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Hello Admin</Title>
      <div className={classes.admin}>A D</div>
    </React.Fragment>
  );
}
