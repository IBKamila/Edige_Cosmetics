import React from "react";
import "../Navbar/Navbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Favorites.css";

const Favorites = () => {
  return (
    <div>
      <Navbar />
      <hr className="hr" />
      <div>
        <h1 className="textfav">Your favorites</h1>
      </div>

      <div className="card_fav">
        <div className="cardfav1">
          <img />
        </div>
        <div className="cardfav1">
          <img />
        </div>
        <div className="cardfav1">
          <img />
        </div>
        <div className="cardfav1">
          <img />
        </div>
        <div className="cardfav1">
          <img />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
