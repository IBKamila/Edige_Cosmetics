import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Auth from "./Components/Auth/Auth";
import Cart from "./Components/Cart/Cart";
import Favorites from "./Components/Favorites/Favorites";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Registration from "./Components/Registration/Registration";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/registr" element={<Registration />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/details" element={<ProductDetails />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default MainRoutes;
