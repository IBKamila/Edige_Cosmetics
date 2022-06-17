import React, { useContext, useEffect } from "react";
import "./Cart.css";
import fill from "../../imgs/fill.png";
import x from "../../imgs/+.png";
import mask from "../../imgs/Mask.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { cartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cart, getCart, deleteCartProduct, changeProductCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  const Cart = () => {
    return (
      <>
        <Navbar />
        <hr className="cartHR" />
        <div className="cartMain">
          <div className="cartTitles">
            <h3 className="cartTitle">Your cart</h3>
            <span className="cartCount">2 products</span>
          </div>
          <div className="cartCards">
            <div data-aos="flip-left" className="cartCard">
              <div className="cartImg">
                <img src={mask} alt="" />
              </div>
              <div className="cartInfo">
                <h1 className="cardTitle">Title</h1>
                <span className="cartFav">
                  {" "}
                  <img className="favImg" src={fill} alt="heart_img" /> Add to
                  favorites
                </span>
                <input className="cartInp" type="number" id="input" readonly />
              </div>
              <div className="iconsCart">
                <img className="x_cart" src={x} alt="x_img" />
                <span className="price_cart">54 €</span>
              </div>
            </div>
            <div className="cartCard">
              <div className="cartImg">
                <img src={mask} alt="" />
              </div>
              <div className="cartInfo">
                <h1 className="cardTitle">Title</h1>
                <span className="cartFav">
                  {" "}
                  <img className="favImg" src={fill} alt="heart_img" /> Add to
                  favorites
                </span>
                <input className="cartInp" type="number" id="input" readonly />
              </div>
              <div className="iconsCart">
                <img className="x_cart" src={x} alt="x_img" />
                <span className="price_cart">54 €</span>
              </div>
              <div class="remove">
                <u onClick={() => deleteCartProduct(elem.item.id)}>Remove</u>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };
};
export default Cart;
