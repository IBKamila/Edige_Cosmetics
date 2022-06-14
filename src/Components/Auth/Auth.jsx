import React from "react";
import logo from "./Media/logo1.svg";
import "./Auth.css";
import { TextField } from "@mui/material";
import logo2 from "./Media/Vector.svg";

const Auth = () => {
  return (
    <div className="conteiner_auth">
      {/* <div className="logoName">
        <img src={logo} alt="logo" />
      </div> */}
      <h1 className="titul1pull">Authorization</h1>
      <h2 className="text1">
        Please enter your username and password from your account tolog in, or
        register
      </h2>
      <TextField
        className="inp"
        id="standard-basic"
        label="Your E-Mail"
        variant="standard"
      />
      <TextField
        className="inp1"
        id="standard-basic"
        label="Password"
        variant="standard"
      />
      <button className="btn">Log-in</button>
      <img className="logo2" src={logo2} alt="" />
      <h2 className="signin">Sign in</h2>
    </div>
  );
};

export default Auth;
