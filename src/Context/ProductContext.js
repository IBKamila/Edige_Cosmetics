import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const productContext = createContext();

// const API = "http://localhost:8000/products";
const API = "https://cosmeticshackathon.herokuapp.com/";

const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCTS_DETAILS":
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  //   const location = useLocation();

  const getProducts = async () => {
    //   !здесь была пагинация
    const res = await axios.get(`${API}products/list/`);
    console.log(res.data.results);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data.results,
    });
  };

  const getProductsDetails = async (id) => {
    const { data } = await axios.get(`${API}products/${id}`);
    dispatch({
      type: "GET_PRODUCTS_DETAILS",
      payload: data.results,
    });
  };
  console.log(productDetails);

  const addProduct = async (newProduct) => {
    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.access}`,
      },
    };
    console.log(newProduct);

    let newProduct2 = new FormData();
    newProduct2.append("title", newProduct.title);
    // newProduct2.append("description", newProduct.description);
    newProduct2.append("price", newProduct.price);
    newProduct2.append("category", newProduct.category);
    // newProduct2.append("img1", newProduct.img1);
    // newProduct2.append("img2", newProduct.img2);
    // newProduct2.append("img3", newProduct.img3);
    // newProduct2.append("img4", newProduct.img4);
    try {
      await axios.post(`${API}products/create/`, newProduct2, config);
      getProducts();
      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };

  //   !коменты
  //   async function addComments(id, comments) {
  //     await axios.patch(API, comments);
  //     getProducts();
  //   }

  const deleteProduct = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${token.access}`;

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.access}`,
      },
    };
    await axios.delete(`${API}products/delete/${id}`, config);
    getProducts();
  };

  const editProduct = async (id, prodObj) => {
    // let { data } = await axios.get(`${API}products/update/${id}`);
    // dispatch({
    //   type: "EDIT_PRODUCT",
    //   payload: data,
    // });
    await axios.patch(`${API}products/update/${id}`, prodObj);
    getProducts();
  };

  // const editProduct = async (newProduct) => {
  //   let token = JSON.parse(localStorage.getItem("token"));

  //   const config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       Authorization: `Bearer ${token.access}`,
  //     },
  //   };

  //   let newProduct2 = new FormData();
  //   newProduct2.append("title", newProduct.title);
  // newProduct2.append("description", newProduct.description);
  // newProduct2.append("price", newProduct.price);
  // newProduct2.append("category", newProduct.category);
  // newProduct2.append("img1", newProduct.img1);
  // newProduct2.append("img2", newProduct.img2);
  // newProduct2.append("img3", newProduct.img3);
  // newProduct2.append("img4", newProduct.img4);

  // let id = newProduct2.get("id");

  // await axios.patch(`${API}products/update/${id}/`, newProduct2, config);
  // getProducts();
  // navigate('/store')
  // };
  //   const saveProduct = async (newProduct) => {
  //     let access = localStorage.getItem("access");
  //     let config = {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     };
  //     if (access) {
  //       config["headers"]["Authorization"] = `Bearer ${access}`;
  //     }
  //     await axios.patch(
  //       `${URL}/products/${newProduct["id"]}/`,
  //       newProduct,
  //       config
  //     );
  // getExactProductData(newProduct.id);
  //   };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        productDetails: state.productDetails,
        productToEdit: state.productToEdit,

        addProduct,
        // addComments,
        getProducts,
        getProductsDetails,
        deleteProduct,
        editProduct,
        // saveProduct,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
