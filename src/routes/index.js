import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  LandingPage,
  // BabyToys,
  // Computers,
  // Electronics,
  // Fashion,
  // HomeKitchen,
  // Phones,
  // WineOtherCategories,
  UserRegister,
  UserLogin,
  Signin,
  Login,
  MainDashboard,
  // ProductTable,
  // DashboardHome
} from "../imports";
// import { navLinks } from "../components/navigation/Navbar";

/* const navComponents = [
  BabyToys,
  Computers,
  Electronics,
  Fashion,
  HomeKitchen,
  Phones,
  WineOtherCategories
];
 */

 const AppRoutes = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/admin" component={Login} />
        <Route path="/admin/dashboard" component={MainDashboard} />
        <Route path="/admin/register" component={Signin} />
        {/* <Route path="/admin/dashboard/product" component={ProductTable} /> */}
        <Route path="/products/" />
        <Route path="/account/login" component={UserLogin} />
        <Route path="/account/register" component={UserRegister} />
        {/* dashboard routes */}
      </Router>
    </>
  );
};

export default AppRoutes;
