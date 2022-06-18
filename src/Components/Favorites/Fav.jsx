import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Fav.css";
import { favContext } from "../../Context/FavContext";

const Fav = () => {
  const { fav, getFav, deleteFavProduct } = useContext(favContext);

  useEffect(() => {
    getFav();
  }, []);

  return (
    <div>
      <Navbar />
      <hr className="hr" />
      <div>
        <h1 className="textfav">Your favorites</h1>
      </div>
      {fav.products
        ? fav.products.map((elem) => (
            <div className="card_fav">
              <div className="cardfav1">
                <img src={elem.item.img} style={{ height: "120px" }} />
              </div>
              <div class="about">
                <h1 class="title">{elem.item.title}</h1>
              </div>
              <div class="remove">
                <u onClick={() => deleteFavProduct(elem.item.id)}>Remove</u>
              </div>
            </div>
          ))
        : null}
      <Footer />
    </div>
  );
};

export default Fav;
