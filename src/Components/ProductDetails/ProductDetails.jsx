import React, { useContext } from "react";
import pdimg from "../../Media/Rectangle 1.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import heart from "../../Media/Fill-18.svg";
import cart from "../../imgs/cart.png";
import "./ProductDetails.css";
import { cartContext } from "../../Context/CartContext";
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
      <div className="detMain">
        <div className="leftDet">
          <img className="detImg" src={pdimg} alt="main_img" />
        </div>
        <div className="rightDet">
          <span className="favDet">
            <img className="heartDet" src={heart} alt="heart_img" />
            Add to favorites
          </span>
          <h1 className="detTitle">Title</h1>
          <div className="detPrice">54 €</div>
          <button className="btnDet">
            <img src={cart} alt="cart_img" />
            Add to shopping cart
          </button>
          <h3 className="descDet">Description</h3>
          <p className="pDet">
            A truly magical box that in a matter of seconds will make your
            eyebrows as natural as possible and at the same time expressive. The
            natural composition of all positions in this box guarantees the safe
            use of products. Try it to be sure!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
