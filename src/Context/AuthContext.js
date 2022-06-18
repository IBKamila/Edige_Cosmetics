import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

const API = "https://cosmeticshackathon.herokuapp.com/";

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = "";
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = async (user) => {
    let config = {
      headers: { "Content-type": "multipart/form-data" },
    };
    config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    let formData = new FormData();
    // formData.append("username", user.username);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("password_confirm", user.passwordConfirm);

    try {
      const res = await axios.post(`${API}account/register/`, formData, config);
      console.log(res);
      navigate("/auth");
    } catch (e) {
      console.error(e);
      setError("error occured");
    }
  };

  async function login(email, password) {
    console.log(email, password);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    // formData.append("password_confirm", password_confirm);
    console.log(formData);
    try {
      let res = await axios.post(`${API}account/api/login/`, formData, config);
      localStorage.setItem("token", JSON.stringify(res.data));
      // localStorage.setItem("username", username);
      // setUser(username);
      navigate("/");
    } catch (error) {
      setError("error occured");
    }
  }

  async function checkAuth() {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      const Authorization = `Bearer ${token.access}`;

      let res = await axios.post(
        `${API}account/api/token/refresh/`,
        {
          refresh: token.refresh,
        },
        {
          headers: { Authorization },
        }
      );
      console.log(token.access);
      localStorage.setItem(
        "token",
        JSON.stringify({
          refresh: token.refresh,
          access: res.data.access,
        })
      );

      let userName = localStorage.getItem("username");
      setUser(userName);
    } catch (error) {
      logout();
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
  }

  return (
    <authContext.Provider
      value={{
        register,
        login,
        user,
        error,
        checkAuth,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
