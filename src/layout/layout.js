import React from "react";
import { Header, Footer } from "../imports";

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}      
      <Footer />
    </>
  );
};

export default Layout;
