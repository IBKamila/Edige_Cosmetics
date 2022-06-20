import React from "react";
import "./Contacts.css";
import kreslaimg from "../../Media/kresla.png";
import map from "../../Media/map.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import icons from "../../imgs/footer.png";

const Contacts = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Our contacts</h1>
      </div>

      <img src={kreslaimg}></img>

      <div>
        <div>
          <span>a</span>
          <h2>123</h2>
        </div>
        <div>
          <span>a</span>
          <h2>123</h2>
        </div>
        <div>
          <span>a</span>
          <h2>123</h2>
        </div>
        <div>
          <span>a</span>
          <h2>123</h2>
        </div>

        <img src={map}></img>
        <div>
          <h3>fgbvhdjfknvjnvdnhvuihfvbjfvnjh bgcffdhbv</h3>
          <img src={icons}></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
