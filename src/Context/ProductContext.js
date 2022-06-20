import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const productContext = createContext();

const API = "https://cosmeticshackathon.herokuapp.com/";

const INIT_STATE = {
  products: [],
  productDetails: {},
  productToEdit: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCTS_DETAILS":
      return { ...state, productDetails: action.payload };
    // case "EDIT_PRODUCT":
    //   return { ...state, productToEdit: action.payload };

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
      payload: data,
    });
  };

  const addProduct = async (newProduct) => {
    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.access}`,
      },
    };
    console.log(newProduct);

    let newProductAdd = new FormData();
    newProductAdd.append("title", newProduct.title);
    newProductAdd.append("description", newProduct.description);
    newProductAdd.append("price", newProduct.price);
    newProductAdd.append("category", newProduct.category);
    // newProductAdd.append("img1", newProduct.img1);
    // newProductAdd.append("img2", newProduct.img2);
    // newProductAdd.append("img3", newProduct.img3);
    // newProductAdd.append("img4", newProduct.img4);
    try {
      await axios.post(`${API}products/create/`, newProductAdd, config);
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

  // const editProduct = async (id, prodObj) => {
  // let { data } = await axios.get(`${API}products/update/${id}`);
  // dispatch({
  //   type: "EDIT_PRODUCT",
  //   payload: data,
  // });
  //   await axios.patch(`${API}products/update/${id}`, prodObj);
  //   getProducts();
  // };

  const editProduct = async (id, newProduct) => {
    console.log(newProduct, "in context");
    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.access}`,
      },
    };

    let newProductEdited = new FormData();
    newProductEdited.append("title", newProduct.title);
    newProductEdited.append("description", newProduct.description);
    newProductEdited.append("price", newProduct.price);
    newProductEdited.append("category", newProduct.category);
    // newProductEdited.append("img1", newProduct.img1);
    // newProductEdited.append("img2", newProduct.img2);
    // newProductEdited.append("img3", newProduct.img3);
    // newProductEdited.append("img4", newProduct.img4);

    try {
      await axios.patch(
        `${API}products/update/${id}/`,
        newProductEdited,
        config
      );
      getProducts();
      // navigate("/store");
    } catch (error) {
      console.log(error);
    }
  };

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
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
