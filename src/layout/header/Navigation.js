import React from "react";
import { connect } from "react-redux";
import {
  Button,
  makeStyles,
  AppBar,
  Toolbar,
  InputBase
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { LazyLoadImage, ModalLogin } from "../../imports";
// import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  AppBar: {
    background: "#ed017f !important",
    height: "70px"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white"
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100vh",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    right: "0",
    borderBottomRightRadius: "5px",
    borderTopRightRadius: "5px",
    alignItems: "center",
    backgroundColor: "#fba100",
    color: "white",
    justifyContent: "center"
  },
  inputRoot: {
    color: "#4a4a4a"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch"
    }
  },
  logo: {
    pointer: "cursor"
  },
  storeLocator: {
    "&:hover": {
      backgroundColor: "white"
    }
  },
  closeButton: {
    position: "absolute",
    background: "gray",
    zIndex: "2000",
    color: "white",
    fontWeight: "bold",
    top: "30px",
    right: "20px",
    "&:hover": {
      background: "red",
      color: "black"
    }
  },
  menulist: {
    "& li": {
      "&:hover": {
        background: "white",
        color: "#ed017f"
      },
      listStyle: "none",
      margin: "0 10px",
      cursor: "pointer",
      width: "98px",
      padding: "25px 0"
    },
    display: "flex",
    padding: "0px"
  },
  help: {
    "&:hover": {
      display: "block"
    },
    "& ul": {
      display: "none"
    }
  },
  cartButton: {
    background: "green",
    color: "white",
    width: "20vh",
    height: "40px",
    marginLeft: "20px"
  },
  counter: {
    background: "white",
    color: "black",
    width: "20px",
    margin: "10px"
  }
}));

function PrimarySearchAppBar(props) {
  const [open, setOpen] = React.useState(false);

  const showModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  const classes = useStyles();
  return (
    <div className={styles.Navigation}>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar>
          <LazyLoadImage
            publicId="konga/konga_logo_f27l0w.webp"
            className={classes.logo}
            height="40"
            width="128"
          />
          <ul className={classes.menulist}>
            <li className={classes.storeLocator}>Store Locator</li>
            <li className={classes.help}>
              Help
              <ul>
                <li>FAQ's</li>
                <li>Contact Us</li>
              </ul>
            </li>
          </ul>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for products brands and categories"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{
                "aria-label": "search"
              }}
            />
          </div>
          <ul className={classes.menulist}>
            <li className={classes.Sell}>Sell on Konga</li>
            <li className={classes.login} onClick={showModal}>
              Login/Signup
            </li>
          </ul>
          <div>
            <Button className={classes.cartButton}>
              My Cart <span className={classes.counter}>{props.counter}</span>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {open ? (
        <>
          <Button className={classes.closeButton} onClick={closeModal}>
            Close
          </Button>
          <ModalLogin handleOpen={open} handleClose={closeModal} />
        </>
      ) : null}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter
  };
};

export default connect(mapStateToProps)(PrimarySearchAppBar);
