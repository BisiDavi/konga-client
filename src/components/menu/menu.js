import React from "react";
import classes from "./menu.module.css";
// import { Link } from "react-router-dom";
import { computersMenu } from "./list/categoryList";

export const showMenu = categories => (
  <div className={classes.menu}>
    {categories.map((category, index) => (
      <div key={category[0]} className={category[0]}>
        <li key={index}>
          <b>{category[0]}</b>
        </li>
        {category.map(menu => (
          <li key={menu}>
            {menu !== category[0] ? menu : ""}
          </li>
        ))}
      </div>
    ))}
  </div>
);

const Menu = () => showMenu(computersMenu);

export default Menu;
