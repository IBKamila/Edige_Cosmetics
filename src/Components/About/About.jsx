import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import imgabout from "../../Media/imgabout2.png";
import imgpalma from "../../Media/palma.png";
import krug from "../../Media/krug.svg";
import sign from "../../Media/sign.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <hr className="hrabout" />
      <div className="conteiner_about">
        <h1 className="titleabout">About Us</h1>
        <h2 id="text1">
          The brand seeks to build respect among the audience for its products,
          so that the presence of the company's products is a sign of prestige,
          since the focus of the business is focused on exclusive sales, but not
          on the mass market. The brand seeks to build respect among the
          audience for its products, so that the presence of the company's
          products is a sign of prestige, since the focus of the business is
          focused on exclusive sales, but not on the mass market.
        </h2>
        <img className="imgabout" src={imgabout} alt="imgAboutUs" />
        <h2 className="imgabout2">
          The brand seeks to build respect among the audience for its products,
          so that the presence of the company's products is a sign of prestige,
          since the focus of the business is focused on exclusive sales, but not
          on the mass market.{" "}
        </h2>

        <div className="cardnumber">
          <div className="cardnum">
            <h1 className="num">600+</h1>
            <span className="tn">Man on the team </span>
          </div>
          <div className="cardnum">
            <h1 className="num">1.6 m</h1>
            <span className="tn">Followers at social network </span>
          </div>
          <div className="cardnum">
            <h1 className="num">35</h1>
            <span className="tn">offline shop </span>
          </div>
          <div className="cardnum">
            <h1 className="num">64</h1>
            <span className="tn">products of own production</span>
          </div>
          <div className="cardnum">
            <h1 className="num">2X</h1>
            <span className="tn">Revenue growth every year</span>
          </div>
          <div className="cardnum">
            <h1 className="num">3+</h1>
            <span className="tn">Location at world </span>
          </div>
        </div>
        <h2 className="imgabout3">
          The brand seeks to build respect among the audience for its products,
          so that the presence of the company's products is a sign of prestige,
          since the focus of the business is focused on exclusive sales, but not
          on the mass market. The brand seeks to build respect among the
          audience for its products, so that the presence of the company's
          products is a sign of prestige, since the focus of the business is
          focused on exclusive sales, but not on the mass market.
        </h2>
        <img src={imgpalma} alt="imgpalma" className="imgpalma" />
        <h1 className="text4">
          Each Edige brand product is truly unique - everything is thought out
          to the smallest detail.
        </h1>
        <div className="conteiner_bio">
          <h2 className="text5">
            The brand seeks to build respect among the audience for its
            products, so that the presence of the company's products is a sign
            of prestige, since the focus of the business is focused on exclusive
            sales, but not on the mass market.
          </h2>
          <div className="podpis">
            <img className="photolico" src={krug} alt="krug" />
            <span className="tkn">TKN and EE - CEO, Founders</span>
            <img className="sign2" src={sign} alt="sign" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
