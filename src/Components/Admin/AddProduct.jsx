import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../../Context/ProductContext";
import "./AddProduct.css";

const initObj = {
  title: "",
  description: "",
  price: 0,
  category: "",
  img1: "",
  img2: "",
  img3: "",
  img4: "",
  // comments: [],
};

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const [inpValues, setInpValues] = useState(initObj);

  // const alertToastify = () => {
  //   toast.error("Заполните все поля!", {
  //     position: "top-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: false,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
    console.log(obj);
  };

  const clearInput = () => {
    setInpValues(initObj);
  };

  const handleSave = (e) => {
    if (
      inpValues.title.trim() === "" ||
      inpValues.description.trim() === "" ||
      inpValues.img1.trim() === "" ||
      inpValues.img2.trim() === "" ||
      inpValues.img3.trim() === "" ||
      inpValues.img4.trim() === "" ||
      inpValues.price.toString().trim() === ""
    ) {
      // alertToastify();
      return;
    }
    e.preventDefault();
    addProduct(inpValues);
    clearInput();
  };

  return (
    <div className="containerAdd">
      <h1 className="titulAdd">Product addition</h1>
      <form className="siteBar-inputs" onSubmit={(e) => handleSave(e)}>
        <TextField
          className="inputAdd"
          id="standard-basic"
          label="Title"
          variant="standard"
          value={inpValues.title}
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="input1Add"
          id="standard-basic"
          label="Description"
          variant="standard"
          value={inpValues.description}
          name="description"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="input2Add"
          id="standard-basic"
          label="Price"
          type="number"
          variant="standard"
          value={inpValues.price}
          name="price"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="input3Add"
          id="standard-basic"
          label="Category"
          variant="standard"
          value={inpValues.category}
          name="category"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="input4Add"
          id="standard-basic"
          label="img1"
          variant="standard"
          value={inpValues.img1}
          name="img1"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="input5Add"
          id="standard-basic"
          label="img2"
          variant="standard"
          value={inpValues.img2}
          name="img2"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="input6Add"
          id="standard-basic"
          label="img3"
          variant="standard"
          value={inpValues.img3}
          name="img3"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="input7Add"
          id="standard-basic"
          label="img4"
          variant="standard"
          value={inpValues.img4}
          name="img4"
          onChange={(e) => handleChange(e)}
        />
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
