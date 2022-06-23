import React, { createContext, useContext, useReducer, useState } from "react";

import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { API } from "../helpers/consts";
export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
  reviews: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    case "GET_COMMENTS":
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

const CrudContextProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const [count, setCount] = useState(1);

  const getProducts = async () => {
    let loc = location.pathname;
    let url = `${loc}?page=${page}`;
    navigate(url);
    const { data } = await axios(`${API}products/list/?page=${page}`);
    const filteredRes = data.results.filter(
      (res) => res.category !== "Аксессуары и PRO"
    );
    console.log(filteredRes, "data");
    setCount(Math.ceil(data.count / 8));
    dispatch({
      type: "GET_PRODUCTS",
      payload: data.results,
    });
  };
  const getProductDetails = async (id) => {
    const { data } = await axios(`${API}products/${id}`);
    dispatch({
      type: "GET_PRODUCT_DETAILS",
      payload: data,
    });
  };

  const addProduct = async (newProduct) => {
    console.log(newProduct.image, "new product image");

    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.access}`,
      },
    };

    let newProduct2 = new FormData();
    newProduct2.append("title", newProduct.title);
    newProduct2.append("description", newProduct.description);
    newProduct2.append("category", newProduct.category);
    newProduct2.append("price", newProduct.price);
    newProduct2.append("image", newProduct.image);
    console.log();

    await axios.post(`${API}products/create/`, newProduct2, config);
    getProducts();
    navigate("/admin");
  };

  const deleteProduct = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${token.access}`;

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.access}`,
      },
    };
    await axios.delete(`${API}products/delete/${id}/`, config);
    getProducts();
  };

  const saveEditedProduct = async (newProduct) => {
    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.access}`,
      },
    };
    let newProduct2 = new FormData();
    newProduct2.append("title", newProduct.title);
    newProduct2.append("description", newProduct.description);
    newProduct2.append("category", newProduct.category);
    newProduct2.append("price", newProduct.price);
    if (typeof newProduct.image !== "string") {
      newProduct2.append("image", newProduct.image);
    }
    console.log(newProduct2, "new");

    let id = newProduct2.get("id");

    await axios.patch(`${API}products/update/${id}/`, newProduct2, config);
    getProducts();
    navigate("/admin");
  };

  const fetchByParams = async (query, value) => {
    if (value === "all") {
      getProducts();
    } else {
      const { data } = await axios(`${API}products/list/?${query}=${value}`);

      dispatch({
        type: "GET_PRODUCTS",
        payload: data,
      });
    }
  };

  const searchFilter = async (value) => {
    const { data } = await axios(`${API}products/list/?search=${value}`);

    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  const toogleLike = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${token.access}`;

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.access}`,
      },
    };

    await axios(`${API}/products/${id}/like/`, config);
    getProducts();
  };

  const getComments = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${token.access}`,
      },
    };
    let { data } = await axios(`${API}/products/reviews/${id}`);

    dispatch({
      type: "GET_COMMENTS",
      payload: data,
    });
  };

  const addComment = async (comm) => {
    let token = JSON.parse(localStorage.getItem("token"));

    console.log(comm);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.access}`,
      },
    };
    let newComm = new FormData();

    newComm.append("text", comm.text);
    newComm.append("product", comm.product);

    await axios.post(`${API}/products/reviews/`, newComm, config);
  };

  const deleteComm = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token.access}`,
      },
    };
    await axios.delete(`${API}/products/reviews/${id}/`, config);
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        productDetails: state.productDetails,
        comments: state.comments,
        addProduct,
        getProducts,
        deleteProduct,
        saveEditedProduct,
        getProductDetails,
        page,
        setPage,
        fetchByParams,
        count,
        searchFilter,
        toogleLike,
        getComments,
        addComment,
        deleteComm,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default CrudContextProvider;
