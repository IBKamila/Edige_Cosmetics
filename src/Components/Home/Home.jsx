import React from "react";
import "./Home.css";
import Rectangle from "../../Media/Rectangle.svg";
import sign from "../../Media/sign.png";
import care from "../../imgs/care.png";
import beauty from "../../imgs/beauty.png";
import brows from "../../imgs/Brows.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import mask from "../../imgs/mask.png";

const Home = () => {
  return (
    <>
      <Navbar location="home" />
      <div className="container_home">
        <div className="card_holder">
          <div data-aos="fade-up" className="card_home home_cat">
            <img className="card_img" src={care} alt="care_img" />
            <h1 className="h1home">Care</h1>
          </div>
          <div data-aos="fade-left" className="card_home cardProd_home">
            <img className="card_imgP" src={mask} alt="care_img" />
            <h1 className="h1homeProd">Title</h1>
            <h1 className="h1homePrice">54 €</h1>
          </div>
          <div data-aos="fade-left" className="card_home cardProd_home">
            <img className="card_imgP" src={mask} alt="care_img" />
            <h1 className="h1homeProd">Title</h1>
            <h1 className="h1homePrice">54 €</h1>
          </div>
          <div data-aos="fade-left" className="card_home cardProd_home">
            <img className="card_imgP" src={mask} alt="care_img" />
            <h1 className="h1homeProd">Title</h1>
            <h1 className="h1homePrice">54 €</h1>
          </div>
        </div>
        <div className="card_holder">
          <div data-aos="fade-right" className="card_home cardProd_home">
            <img className="card_imgP" src={mask} alt="care_img" />
            <h1 className="h1homeProd">Title</h1>
            <h1 className="h1homePrice">54 €</h1>
          </div>
          <div data-aos="fade-right" className="card_home cardProd_home">
            <img className="card_imgP" src={mask} alt="care_img" />
            <h1 className="h1homeProd">Title</h1>
            <h1 className="h1homePrice">54 €</h1>
          </div>
          <div data-aos="fade-right" className="card_home cardProd_home">
            <img className="card_imgP" src={mask} alt="care_img" />
            <h1 className="h1homeProd">Title</h1>
            <h1 className="h1homePrice">54 €</h1>
          </div>
          <div data-aos="fade-up" className="card_home home_cat">
            <img className="card_img" src={beauty} alt="care_img" />
            <h1 className="h1home">Beauty</h1>
          </div>
        </div>
        <div data-aos="fade-left" className="card_holder">
          <div data-aos="fade-up" className="card_home home_cat">
            <img className="card_img" src={brows} alt="care_img" />
            <h1 className="h1home">Brows</h1>
          </div>
          <div data-aos="fade-left" className="card_home cardProd_home">
            <img className="card_imgP" src={mask} alt="care_img" />
            <h1 className="h1homeProd">Title</h1>
            <h1 className="h1homePrice">54 €</h1>
          </div>
          <div data-aos="fade-left" className="card_home cardProd_home">
            <img className="card_imgP" src={mask} alt="care_img" />
            <h1 className="h1homeProd">Title</h1>
            <h1 className="h1homePrice">54 €</h1>
          </div>
          <div data-aos="fade-left" className="card_home cardProd_home">
            <img className="card_imgP" src={mask} alt="care_img" />
            <h1 className="h1homeProd">Title</h1>
            <h1 className="h1homePrice">54 €</h1>
          </div>
        </div>
      </div>

      <div className="homeDesc">
        <img className="rectangleHome" src={Rectangle} alt="rectangle" />
        <div className="homeRight">
          <h3 className="h3home">
            Each Boltaeva brand product is truly unique - everything is thought
            out to the smallest detail.
          </h3>
          <p className="descHome">
            The brand seeks to build respect among the audience for its
            products, so that the presence of the company's products is a sign
            of prestige, since the focus of the business is focused on exclusive
            sales, but not on the mass market.
          </p>
          <h4 className="h4home">FullStack Team</h4>
          <img className="sign" src={sign} alt="sign" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
