import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import CartContextProvider from "./Context/CartContext";
import FavContextProvider from "./Context/FavContext";
import ProductContextProvider from "./Context/ProductContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <ProductContextProvider>
          <CartContextProvider>
            <FavContextProvider>
              <AuthContextProvider>
                <MainRoutes />
              </AuthContextProvider>
            </FavContextProvider>
          </CartContextProvider>
        </ProductContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
