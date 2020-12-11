import React, { useState } from "react";
import { showMenu } from "../menu/menu";
import {
  computersMenu,
  electronicMenu,
  fashionMenu,
  kitchenMenu,
  phoneMenu,
  toyMenu,
  wineMenu
} from "../menu/list/categoryList";
import classes from "./Navbar.module.css";

export const navLinks = [
  "All Categories",
  "Computers and Accessories",
  "Phones and Tablets",
  "Electronics",
  "Konga Fashion",
  "Home and Kitchen",
  "Baby,Kids and Toys",
  "Wines & Other Categories"
];

const Navbar = () => {

  const [navMenu, setNavMenu] = useState(null);

  function showNavMenu(category) {
    switch (category) {
      case "Computers and Accessories":
        setNavMenu(showMenu(computersMenu));
        break;
      case "Phones and Tablets":
        setNavMenu(showMenu(phoneMenu));
        break;
      case "Electronics":
        setNavMenu(showMenu(electronicMenu));
        break;
      case "Konga Fashion":
        setNavMenu(showMenu(fashionMenu));
        break;
      case "Home and Kitchen":
        setNavMenu(showMenu(kitchenMenu));
        break;
      case "Baby,Kids and Toys":
        setNavMenu(showMenu(toyMenu));
        break;
      case "Wines & Other Categories":
        setNavMenu(showMenu(wineMenu));
        break;

      default:
        return null;
    }
  }

  const tempMenu2 = () => setNavMenu(null);

  const displayNavlinks = navLinks.map((link, index) => (
    <div  key={index}>
      <li
        key={index}
        onMouseOverCapture={() => showNavMenu(link)}
        onMouseLeave={tempMenu2}>
        <a href={link}>{link}</a>
      </li>
    </div>
  ));

  return (
    <nav className={classes.Navbar}>
      <ul>{displayNavlinks}</ul>
      {navMenu}
    </nav>
  );
};

export default Navbar;
