import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <MainRoutes />
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
