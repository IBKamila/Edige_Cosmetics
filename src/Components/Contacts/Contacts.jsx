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
            Each Boltaeva brand product is truly unique - everything is thought
            out to the smallest detail.
          </h3>
          <img className="iconsour" src={icons}></img>
        </div>

        <div>
          <img src={a11}></img>
          <img src={a22}></img>
          <img src={a33}></img>
          <img src={a44}></img>
          <img src={a55}></img>
          <img src={a66}></img>
          <img src={a77}></img>
          <img src={a88}></img>
        </div>

        <div>
          <div>
            <img src={logo}></img>
            <h3>Request a call back</h3>
            <TextField
              className="inp"
              id="standard-basic"
              label="Surname, name and patronymic"
              variant="standard"
            />
            <TextField
              className="inp"
              id="standard-basic"
              label="Contact number"
              variant="standard"
            />
            <TextField
              className="inp"
              id="standard-basic"
              label="Email"
              variant="standard"
            />
            <button>Request call</button>
          </div>

          <div>
            <img src={dva}></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
