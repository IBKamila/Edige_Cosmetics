import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/AddProduct/AddProduct";
import Auth from "./Components/Auth/Auth";
import EditProduct from "./Components/EditProduct/EditProduct";
import Home from "./Components/Home/Home";
import ProductList from "./Components/ProductList/ProductList";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Registration from "./Components/Registration/Registration";
import Fav from "./Components/Favorites/Fav";
import AdminPanel from "./Components/Admin/AdminPanel";
import Order from "./Components/Order/Order";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/list" element={<ProductList />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/registr" element={<Registration />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/details" element={<ProductDetails />} />
      <Route path="/fav" element={<Fav />} />
      <Route path="/order" element={<Order />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default MainRoutes;
