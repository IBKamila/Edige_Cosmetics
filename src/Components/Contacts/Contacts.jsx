import React from "react";
import "./Contacts.css";
import kreslaimg from "../../Media/kresla.png";
import map from "../../Media/map.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import icons from "../../imgs/footer.png";
import a11 from "../../Media/11.png";
import a22 from "../../Media/22.png";
import a33 from "../../Media/33.png";
import a44 from "../../Media/44.png";
import a55 from "../../Media/55.png";
import a66 from "../../Media/66.png";
import a77 from "../../Media/77.png";
import a88 from "../../Media/88.png";
import logo from "../../imgs/logoFooter.svg";
import { TextField } from "@mui/material";
import dva from "../../Media/product2.png";

const Contacts = () => {
  return (
    <div>
      <Navbar />
      <hr className="hrabout" />
      <h1 className="our">Our contacts</h1>

      <img className="imgour" src={kreslaimg}></img>

      <div className="conteiner_ourimg">
        <div className="kvadraty">
          <span className="titleour">Call us</span>
          <h2 className="numberour">+996(555)24-06-22</h2>
        </div>
        <div className="kvadraty">
          <span className="titleour">Support</span>
          <h2 className="numberour">helpme@edigecosmetics.pro</h2>
        </div>
        <div className="kvadraty">
          <span className="titleour">Adress</span>
          <h2 className="numberour">Bishkek, Tabyshalieva st. 29</h2>
        </div>

        <img src={map}></img>
        <div>
          <h3 className="textour">
            Each Edige Cosmetics brand product is truly unique - everything is
            thought out to the smallest detail.
          </h3>
        </div>

        <div className="blackimg">
          <img className="black" src={a11}></img>
          <img className="black" src={a22}></img>
          <img className="black" src={a33}></img>
          <img className="black" src={a44}></img>
          <img className="black" src={a55}></img>
          <img className="black" src={a66}></img>
          <img className="black" src={a77}></img>
          <img className="black" src={a88}></img>
        </div>

        <div className="blockour">
          <div className="rightblock">
            <img className="logonum" src={logo}></img>
            <h3 className="request">Request a call back</h3>
            <div className="inputstext">
              <div className="inpour1">
                <TextField
                  id="standard-basic"
                  label="Surname, name and patronymic"
                  variant="standard"
                />
              </div>
              <div className="inpour2">
                <TextField
                  id="standard-basic"
                  label="Contact number"
                  variant="standard"
                />
              </div>
              <div className="inpour3">
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                />
              </div>
            </div>
            <button className="btnour">Request call</button>
          </div>

          <div className="imgour2">
            <img src={dva}></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
