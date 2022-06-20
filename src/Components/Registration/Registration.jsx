import React from "react";
import "./Registration.css";
import { TextField } from "@mui/material";
import logo2 from "../../Media/Vector.svg";
import { useAuth } from "../../Context/AuthContext";
import { NavLink } from "react-router-dom";

const Registration = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  const { register, error } = useAuth();

  function handleRegister() {
    console.log(password, passwordConfirm);
    if (password !== passwordConfirm) {
      console.log("password dont match");
      return;
    }
    register({ email, password, passwordConfirm });
  }
  return (
    <div>
      <div className="conteiner_auth">
        <h1 className="titul">Registration</h1>
        <h2 className="text">
          If this is your first time on the site, then you should fill out a
          questionnaire so that we can keep a history of your orders
        </h2>
        <TextField
          className="input"
          id="standard-basic"
          label="Your Name"
          variant="standard"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          className="input1"
          id="standard-basic"
          label="Your E-Mail"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          className="input2"
          id="standard-basic"
          label="Password"
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <TextField
          className="input3"
          id="standard-basic"
          label="Password confirm"
          variant="standard"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
        <button className="btn" onClick={() => handleRegister(email, password)}>
          Сomplete registration
        </button>
        <img className="logo2" src={logo2} alt="" />
        <NavLink to="/auth">
          <h2 className="signin">Log in</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default Registration;
