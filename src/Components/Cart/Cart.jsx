import React, { useContext, useEffect } from "react";
import "./Cart.css";
import fill from "../../imgs/fill.png";
import x from "../../imgs/+.png";
import v from "../../imgs/vector.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { cartContext } from "../../Context/CartContext";
import { NavLink } from "react-router-dom";
import { favContext } from "../../Context/FavContext";

const Cart = () => {
  const { addProductToFav } = useContext(favContext);
  const { cart, getCart, deleteCartProduct, changeProductCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

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
          {cart.products
            ? cart.products.map((elem) => (
                <div data-aos="flip-left" className="cartCard">
                  <div className="cartImg">
                    <img src={elem.item.img} alt="" />
                  </div>
                  <div className="cartInfo">
                    <h1 className="cardTitle">{elem.item.title}</h1>
                    <span
                      onClick={() => addProductToFav(elem)}
                      className="cartFav"
                    >
                      <img className="favImg" alt="heart_img" /> Add to
                      favorites
                    </span>
                    <input
                      className="cartInp"
                      id="input"
                      readonly
                      type="number"
                      value={elem.count}
                      onChange={(e) =>
                        changeProductCount(elem.item.id, e.target.value)
                      }
                    />
                  </div>
                  <div className="iconsCart">
                    <img
                      onClick={() => deleteCartProduct(elem.item.id)}
                      className="x_cart"
                      src={x}
                      alt="x_img"
                    />

                    <span className="price_cart">{elem.item.price}</span>
                  </div>
                </div>
              ))
            : null}
          <hr className="cartHR2" />
          <div className="cartOrd">
            <div className="cartTP">
              <h2 className="cartTot">{cart.totalPrice}$</h2>
            </div>
            <button className="cartBtn">
              Place an order <img src={v} />{" "}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
