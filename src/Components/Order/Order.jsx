import React from "react";
import TextField from "@mui/material/TextField";
import "./Order.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import strelkaL from "../../Media/strelkaL.png";
import strelkaR from "../../Media/strelkaR.png";
import butylka from "../../Media/butylka.png";
import karandash from "../../Media/karandash.png";
import umyvashka from "../../Media/umyvashka.png";
import euro from "../../Media/euro.png";

const Order = () => {
  return (
    <>
      <Navbar />
      <hr className="hrabout" />
      <div className="obsh">
        <div className="ordLeft">
          <h1 className="checkoutText">Checkout</h1>
          <div className="ordInps">
            <TextField
              id="standard-basic"
              label="Surname, name and patronymic"
              variant="standard"
            />
          </div>
          <div className="ordInps">
            <TextField
              id="standard-basic"
              label="Country, city, address"
              variant="standard"
            />
          </div>
          <div className="ordInps">
            <TextField
              id="standard-basic"
              label="Contact number"
              variant="standard"
            />
          </div>
          <div className="ordInps">
            <TextField id="standard-basic" label="Email" variant="standard" />
          </div>
        </div>
        <div className="ordRight">
          <div className="ordRight1">
            <h1 className="titletext">Order</h1>
            <button className="btnstrelka1">
              <img src={strelkaL} alt="" />
            </button>

            <button className="btnstrelka1">
              <img src={strelkaR} alt="" />
            </button>
          </div>

          <div className="blocksimg1">
            <img className="img_block" src={butylka} alt="1" />
            <img className="img_block" src={karandash} alt="2" />
            <img className="img_block" src={umyvashka} alt="3" />
          </div>
          <div className="blocksimg2">
            <img className="img_block" src={karandash} alt="2" />
            <img className="img_block" src={butylka} alt="1" />
            <img className="img_block" src={umyvashka} alt="3" />
          </div>
          <div>
            <h1>Total:</h1>
            <img src={euro}></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Order;
