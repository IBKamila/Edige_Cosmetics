import React from "react";
// import logo from "./Media/logo1.svg";
import "./Auth.css";
import { TextField } from "@mui/material";
import logo2 from "../../Media/Vector.svg";
import { useAuth } from "../../Context/AuthContext";
import { NavLink } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login, error } = useAuth();

  function handleLogin(email, password) {
    login(email, password);
  }
  return (
    <div className="conteiner_auth">
      {/* <div className="logoName">
        <img src={logo} alt="logo" />
      </div> */}
      <h1 className="titul1">Authorization</h1>
      <h2 className="text1">
        Please enter your username and password from your account tolog in, or
        register
      </h2>
      <TextField
        className="inp"
        id="standard-basic"
        label="Your E-Mail"
        variant="standard"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <TextField
        className="inp1"
        id="standard-basic"
        label="Password"
        variant="standard"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="btn" onClick={() => handleLogin(email, password)}>
        Log-in
      </button>
      <img className="logo2" src={logo2} alt="" />
      <NavLink to="/registr">
        <h2 className="signin">Sign up</h2>
      </NavLink>
    </div>
  );
};

export default Auth;
