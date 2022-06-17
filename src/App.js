import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import CartContextProvider from "./Context/CartContext";
import ProductContextProvider from "./Context/ProductContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ProductContextProvider>
          <CartContextProvider>
            <AuthContextProvider>
              <MainRoutes />
            </AuthContextProvider>
          </CartContextProvider>
        </ProductContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
