import React from "react";
import logo from "../Auth/Media/logo1.svg";
import "./Registration.css";
import { TextField } from "@mui/material";
import logo2 from "../Auth/Media/Vector.svg";

const Registration = () => {
  return (
    <div>
      <div className="conteiner_auth">
        {/* <div className="logoName">
          <img src={logo} alt="logo" />
        </div> */}
        <h1 className="titul">Registration</h1>
        <h2 className="text">
          If this is your first time on the site, then you should fill out a
          questionnaire so that we can keep a history of your orders
        </h2>
        <TextField
          className="input2"
          id="standard-basic"
          label="Your Name"
          variant="standard"
        />
        <TextField
          className="input"
          id="standard-basic"
          label="Your E-Mail"
          variant="standard"
        />
        <TextField
          className="input1"
          id="standard-basic"
          label="Password"
          variant="standard"
        />
        <button className="btn">Сomplete registration</button>
        <img className="logo2" src={logo2} alt="" />
        <h2 className="signin">Log in</h2>
      </div>
    </div>
  );
};

export default Registration;
