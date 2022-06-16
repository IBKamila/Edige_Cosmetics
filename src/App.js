import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import ProductContextProvider from "./Context/ProductContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ProductContextProvider>
          <AuthContextProvider>
            <MainRoutes />
          </AuthContextProvider>
        </ProductContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
