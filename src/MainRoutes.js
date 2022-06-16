import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Registration from "./Components/Registration/Registration";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/registr" element={<Registration />} />
      <Route path="/details" element={<ProductDetails />} />
    </Routes>
  );
};

export default MainRoutes;
