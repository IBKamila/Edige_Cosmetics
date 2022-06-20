import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import cart1 from "../../Media/bag-21.svg";
import fav3 from "../../Media/heart3.svg";
import { cartContext } from "../../Context/CartContext";
import { favContext } from "../../Context/FavContext";
import Filter from "../Filter/Filter";

const ProductList = () => {
  const { getProducts, products } = useContext(productContext);
  const { addProductToCart } = useContext(cartContext);
  const { addProductToFav } = useContext(favContext);

  useEffect(() => {
    getProducts();
  }, []);

  //   const [searchParams, setSearchParams] = useSearchParams();

  //   const [category, setCategory] = useState(
  //     searchParams.get("category") || "all"
  //   );

  //   const paramsWithCategory = () => {
  //     return {
  //       category: category,
  //       q: searchParams.get("q"),
  //     };
  //   };

  //   const paramsNoCategory = () => {
  //     return {
  //       q: searchParams.get("q") || "",
  //     };
  //   };

  //   useEffect(() => {
  //     if (searchParams.get("category")) {
  //       setSearchParams(paramsWithCategory());
  //     } else {
  //       setSearchParams(paramsNoCategory());
  //     }
  //   }, []);

  //   useEffect(() => {
  //     console.log("useEffect in product list");
  //     getProducts();
  //     if (category === "all") {
  //       setSearchParams(paramsNoCategory());
  //     } else {
  //       setSearchParams(paramsWithCategory());
  //     }
  //   }, [category, searchParams]);

  //   useEffect(() => {
  //     console.log(products);
  //   }, [products]);

  return (
    // <div>
    //   <div className="card">
    //     <img />
    //     <h1 className="h1home">Care</h1>
    //   </div>
    <>
      <Navbar />
      <Filter />
      <div className="prodList">
        {/* <div className="sideNav">
        <Filter
        className="filter"
        category={category}
        setCategory={setCategory}
        />
      </div> */}
        <div className="cards">
          {/* {products &&
            products.map(() => {
              return <span>hello</span>;
            })} */}

          {products.map((item) => (
            <div className="card">
              <div>
                <NavLink to={`/details/${item.id}`}>
                  <img className="imgList" src={item.img} alt="card" />
                </NavLink>
              </div>

              <div className="card-text">
                <span className="card-title">{item.title}</span>
                <p className="card-desc">{item.description}</p>
              </div>
              <div className="card-price">
                <img
                  className="incFav"
                  src={fav3}
                  onClick={() => addProductToFav(item)}
                ></img>

                <img className="incSale" src="" alt="card-tag" />
                <span className="card-price2">{item.price}$</span>
              </div>
              <img
                className="incCart"
                src={cart1}
                onClick={() => addProductToCart(item)}
              ></img>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
