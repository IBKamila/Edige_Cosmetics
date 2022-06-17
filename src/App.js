import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import CartContextProvider from "./Context/CartContext";
import FavContextProvider from "./Context/FavContext";
import ProductContextProvider from "./Context/ProductContext";
import MainRoutes from "./MainRoutes";

const App = () => {
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
