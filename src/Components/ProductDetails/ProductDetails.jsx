import React from "react";
import pdimg from "../../Media/Rectangle 1.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import heart from "../../Media/Fill-18.svg";

const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <div className="left">
        <img className="pdimg" src={pdimg} alt="product" />
        <img className="heartlogo" src={heart} alt="heart" />
        <h2 className="favtext"> Add to favorites</h2>
        <h1 className="milk">Milk for the face </h1>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
