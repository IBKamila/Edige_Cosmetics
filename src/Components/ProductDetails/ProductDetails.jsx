import React, { useContext, useEffect } from "react";
import pdimg from "../../Media/Rectangle 1.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import heart from "../../Media/Fill-18.svg";
import cart from "../../imgs/cart.png";
import "./ProductDetails.css";
import { cartContext } from "../../Context/CartContext";
import { authContext } from "../../Context/AuthContext";
import { productContext } from "../../Context/ProductContext";
import { NavLink, useParams } from "react-router-dom";
import { favContext } from "../../Context/FavContext";
import { Button } from "@mui/material";

const ProductDetails = () => {
  const { addProductToCart } = useContext(cartContext);
  const { addProductToFav } = useContext(favContext);

  const { email } = useContext(authContext);
  const { productDetails, getProductsDetails, deleteProduct, editProduct } =
    useContext(productContext);
  let { id } = useParams();

  useEffect(() => {
    getProductsDetails(id);
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id);
    // navigate("/products");
  };
  const handleEdit = (id) => {
    editProduct(id);
    // navigate("/products");
  };

import { favContext } from "../../Context/FavContext";
import { productContext } from "../../Context/ProductContext";

const ProductDetails = () => {
  const { getProducts, products, deleteProduct, editProduct } =
    useContext(productContext);
  const { addProductToCart } = useContext(cartContext);
  const { addProductToFav } = useContext(favContext);

  return (
    <>
      <Navbar />
      <hr className="hrDet" />

      {productDetails ? (
        <div className="detMain">
          <div className="leftDet">
            <img className="detImg" src={productDetails.img1} alt="main_img" />
          </div>
          <div className="rightDet">
            <span className="favDet">
              <img
                onClick={(e) => addProductToFav(productDetails)}
                className="heartDet"
                src={heart}
                alt="heart_img"
              />
              Add to favorites
            </span>
            <h1 className="detTitle">{productDetails.title}</h1>
            <div className="detPrice">{productDetails.price}</div>
            <button
              onClick={(e) => addProductToCart(productDetails)}
              className="btnDet"
            >
              <img src={cart} alt="cart_img" /> Add to shopping cart
            </button>
            <h3 className="descDet">Description</h3>
            <p className="pDet">{productDetails.description}</p>

            {email === "admin@gmail.com" ? (
              <div className="iconsDet">
                <NavLink to="/list">
                  <Button onClick={() => handleDelete(id)}>delete</Button>
                </NavLink>
                <NavLink to={`/edit/${id}`}>
                  <Button onClick={() => handleEdit(id)}>edit</Button>
                </NavLink>
              </div>
            ) : null}

            {/* {email && email != "admin@gmail.com" ? (
              <div className="iconsDet">
                <a>
                  <img
                    onClick={() => deleteProduct(id)}
                    src={heart}
                    alt="heart"
                  />
                </a>
                <NavLink to="/list">
                  <img
                    onClick={(e) => addProductToCart(productDetails)}
                    id="bag"
                    src={bag2}
                    alt="bag"
                  />
                </NavLink>
              </div>
            ) : null} */}
          </div>
        </div>
      ) : null}
      <Footer />
    </>
  );
};

export default ProductDetails;
