import React, { useContext } from "react";
import cart from "../../imgs/cart.png";
import user from "../../imgs/user.png";
import logo from "../../imgs/logo.svg";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import { cartContext } from "../../Context/CartContext";

const Navbar = (props) => {
  const { cartLength } = useContext(cartContext);

  if (props.location === "home") {
    return <Header />;
  } else {
    return (
      <nav className="navBar">
        <div className="navLists">
          <NavLink to="/list">
            <span className="navList">Catalog</span>
          </NavLink>
          <NavLink to="/about">
            <span className="navList">About</span>
          </NavLink>
          <span className="navList">Delivery</span>
        </div>
        <div className="navLogo">
          <NavLink to="/">
            <img id="navLogo" src={logo} alt="logo_icon" />
          </NavLink>
        </div>
        <div className="navIcons">
          <span className="navList textNav">Contacts</span>
          <input
            className="navIcon search-inp"
            type="search"
            aria-label="Search"
          />

          {/* <NavLink to="/fav">
            <Badge badgeContent={favLength} color="error">
              <img src={fav} alt="cart" />
            </Badge>
          </NavLink> */}

          <NavLink to="/cart">
            {/* <Badge badgeContent={cartLength} color="error"> */}
            <img className="navIcon" src={cart} alt="cart_icon" />
            {/* </Badge> */}
          </NavLink>
          <img className="navIcon" src={user} alt="user_icon" />
        </div>
      </nav>
    );
  }
};

export default Navbar;
