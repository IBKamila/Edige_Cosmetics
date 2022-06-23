import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../Context/CrudContextProvider";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(productDetails);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const handleInp = (e) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };
  const handleInpFile = (e) => {
    let file = e.target.files[0];
    console.log(file);
    setProduct({
      ...product,
      image: file,
    });
  };

  return (
    <>
      <div className="containerAdd">
        <h1 className="titulAdd">Product edit</h1>
        <div className="addForm">
          <TextField
            sx={{ marginBottom: "20px" }}
            className="inputAdd"
            id="standard-basic"
            variant="standard"
            name="title"
            value={product.title || ""}
            onChange={(e) => {
              handleInp(e);
            }}
          />
          <TextField
            sx={{ marginBottom: "20px" }}
            className="inputAdd"
            id="standard-basic"
            label="Description"
            variant="standard"
            value={product.description || ""}
            name="description"
            onChange={(e) => {
              handleInp(e);
            }}
          />
          <FormControl fullWidth size="small" sx={{ borderColor: "black" }}>
            <InputLabel
              value={product.category || ""}
              id="demo-simple-select-label"
              onChange={(e) => {
                handleInp(e);
              }}
            >
              Category
            </InputLabel>
            <Select
              sx={{ marginBottom: "20px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="category"

              //   onChange={(e)=>{handleInp(e)}
              //   }
            >
              <MenuItem value={"Care"}>Care</MenuItem>
              <MenuItem value={"Decor"}>Decor</MenuItem>
              <MenuItem value={"Eyebrow"}>Eyebrow</MenuItem>
              <MenuItem value={"accessories"}>Accessories</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ marginBottom: "20px" }}
            className="inputAdd"
            id="standard-basic"
            label="Price"
            value={product.price || ""}
            type="number"
            variant="standard"
            name="price"
            onChange={(e) => {
              handleInp(e);
            }}
          />
          <TextField
            className="inputAdd"
            sx={{ marginBottom: "10px" }}
            fullWidth
            id="outlined-helperText"
            helperText="insert picture"
            name="image"
            size="small"
            onChange={(e) => {
              handleInpFile(e);
            }}
            type="file"
          />
        </div>
        <button className="save-btn" onClick={() => saveEditedProduct(product)}>
          Save
        </button>
      </div>
    </>
  );
};

export default EditProduct;
