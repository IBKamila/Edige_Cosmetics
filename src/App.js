import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainRoutes from "./MainRoutes";
import Header from "./Components/Navbar/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Navbar display="none" />
          <Header/>
           <MainRoutes />
          <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
