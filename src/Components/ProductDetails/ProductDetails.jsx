import React, { useContext, useEffect, useState } from "react";
import pdimg from "../../Media/Rectangle 1.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import heart from "../../Media/Fill-18.svg";
import cart from "../../imgs/cart.png";
import "./ProductDetails.css";
import { cartContext } from "../../Context/CartContext";
import { authContext, useAuth } from "../../Context/AuthContext";
import { productContext, useProducts } from "../../Context/CrudContextProvider";
import { NavLink, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { favContext } from "../../Context/FavContext";
import { Box } from "@mui/system";

const ProductDetails = () => {
  const { addProductToCart } = useContext(cartContext);
  const { addProductToFav } = useContext(favContext);
  const {
    getProductDetails,
    productDetails,
    getComments,
    comments,
    addComment,
    deleteComm,
  } = useProducts();
  const { userName } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
    getComments(id);
  }, []);

  const [comm, setComm] = useState("");

  const [clear, setClear] = useState("");

  useEffect(() => {
    getProductDetails(id);
    getComments(id);
  }, [comments]);

  const handleInp = (e) => {
    let id2 = Number(id);
    let obj = {
      product: id2,
      text: e.target.value,
    };
    setComm(obj);
    setClear(e.target.value);
  };

  const clearInp = (e) => {
    setClear("");
  };

  return (
    <>
      <Navbar />
      <hr className="hrDet" />

      <div className="detMain">
        <div className="leftDet">
          <img
            className="detImg"
            src={`https://${productDetails.image}`}
            alt="main_img"
          />
        </div>
        <div className="rightDet">
          <span
            onClick={(e) => addProductToFav(productDetails)}
            className="favDet"
          >
            <img className="heartDet" src={heart} alt="heart_img" />
            Add to favorites
          </span>
          <h1 className="detTitle">{productDetails.title}</h1>
          <div className="detPrice">{productDetails.price}$</div>
          <button
            onClick={(e) => addProductToCart(productDetails)}
            className="btnDet"
          >
            <img src={cart} alt="cart_img" /> Add to shopping cart
          </button>
          <h3 className="descDet">Description</h3>
          <p className="pDet">{productDetails.description}</p>
        </div>
      </div>
      <Box>
        {" "}
        <TextField size="small" onChange={handleInp} value={clear} />
        <Button
          onClick={() => {
            addComment(comm);
            clearInp();
          }}
          sx={{ color: "black" }}
        >
          Add comment
        </Button>
      </Box>

      <Footer />
    </>
  );
};

export default ProductDetails;
