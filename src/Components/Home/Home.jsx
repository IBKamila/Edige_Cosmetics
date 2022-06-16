import React from "react";
import "./Home.css";
import Rectangle from "../../Media/Rectangle.svg";
import sign from "../../Media/sign.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
    <Navbar location="home"/>
    <div className="container_home">
      <div className="card_holder">
        <div className="card">
          <img />
          <h1 className="h1home">Care</h1>
        </div>
        <div className="card">
          <p className="nameCards">Perfect brows</p>
          <img />$
        </div>
        <div className="card">
          <p className="nameCards">Perfect brows</p>
          <img />$
        </div>
        <div className="card">
          <p className="nameCards">Perfect brows</p>
          <img />$
        </div>

        <div className="card">
          <img />
          <h1 className="h1home">Care</h1>
        </div>
        <div className="card">
          <p className="nameCards">Perfect brows</p>
          <img />$
        </div>
        <div className="card">
          <p className="nameCards">Perfect brows</p>
          <img />$
        </div>
        <div className="card">
          <p className="nameCards">Perfect brows</p>
          <img />$
        </div>
        <div className="card">
          <img />
          <h1>Care</h1>
        </div>
        <div className="card">
          <p className="nameCards">Perfect brows</p>
          <img />$
        </div>
        <div className="card">
          <p className="nameCards">Perfect brows</p>
          <img />$
        </div>
        <div className="card">
          <p className="nameCards">Perfect brows</p>
          <img />$
        </div>
      </div>

      <div className="homeDesc">
        <img src={Rectangle} alt="rectangle" />
        <h3 className="h3home">
          Each Boltaeva brand product is truly unique - everything is thought
          out to the smallest detail.
        </h3>
        <p className="desc">
          The brand seeks to build respect among the audience for its products,
          so that the presence of the company's products is a sign of prestige,
          since the focus of the business is focused on exclusive sales, but not
          on the mass market.
        </p>
        <h4 className="h4home">FullStack Team</h4>
        <img className="sign" src={sign} alt="sign" />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
