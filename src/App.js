import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainRoutes from "./MainRoutes";
import Header from "./Components/Navbar/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar display="none" />
          <Header />
          <MainRoutes />
          <Footer />
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
