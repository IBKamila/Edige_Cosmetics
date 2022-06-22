import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import CartContextProvider from "./Context/CartContext";
import FavContextProvider from "./Context/FavContext";
import CrudContextProvider from "./Context/CrudContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <CrudContextProvider>
          <CartContextProvider>
            <FavContextProvider>
              <AuthContextProvider>
                <MainRoutes />
              </AuthContextProvider>
            </FavContextProvider>
          </CartContextProvider>
        </CrudContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
