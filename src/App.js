import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
