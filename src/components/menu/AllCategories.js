import React from "react";

const all_categories = [
  "Computers and Accessories",
  "Phones and Tablets",
  "Electronics",
  "Konga Fashion",
  "Home and Kitchen",
  "Baby, Kids and Toys",
  "Wines & Other Categories"
];

const showCategories = () => (
  <ul>
    {all_categories.map((category) => (
      <li>{category}</li>
    ))}
  </ul>
);

const AllCategories = () => {
  return (
    <div className="all_category">
      <div className="sidebar_menu">{showCategories()}</div>
      <div className="menu">
          
      </div>
    </div>
  );
};

export default AllCategories;
