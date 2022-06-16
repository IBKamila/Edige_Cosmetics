import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/AddProduct/AddProduct";
import Auth from "./Components/Auth/Auth";
import EditProduct from "./Components/EditProduct/EditProduct";
import Home from "./Components/Home/Home";
import ProductList from "./Components/ProductList/ProductList";
import Registration from "./Components/Registration/Registration";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/list" element={<ProductList />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/registr" element={<Registration />} />
    </Routes>
  );
};

export default MainRoutes;
