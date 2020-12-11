import React from "react";
import { Inputform, shopIcon, moreIcon } from "../../imports";

const MobileMenu = () => {
  const icons = [
    { label: "Browse All", imgsrc: `${moreIcon}` },
    { label: "Fashion", imgsrc: `${shirtIcon}` },
    { label: "Computers", imgsrc: `${desktopIcon}` },
    { label: "Phones", imgsrc: `${phoneIcon}` },
    { label: "All Deals", imgsrc: `${pricetagIcon}` }
  ];

  const displayIcons = () => {
    icons.map(icon => {
      <li key={icon.label} className="d-flex flex-column">
        <img src={icon.imgsrc} /> <p>{icon.label}</p>
      </li>;
    });
  };
  return (
    <div className="mobilemenu container-fluid bg-white">
      <div className="row">
        <div className="col-sm-1">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="col-sm-2">Konga</div>
        <div className="col-sm-2 offset-sm-6">
          <img src={shopIcon} alt="shop icon" />
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </div>
      </div>
      <div className="row">
        <Inputform inputPlaceholder="Search for products, brands and categories..." />
      </div>
      <div className="row">
        <ul>{displayIcons()}</ul>
      </div>
    </div>
  );
};

export default MobileMenu;
