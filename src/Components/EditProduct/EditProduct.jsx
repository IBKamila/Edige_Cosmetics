import { TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";

const EditProduct = () => {
  const { productDetails, getProductsDetails, editProduct } =
    useContext(productContext);

  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getProductsDetails(id);
  }, []);

  const [inpValues, setInpValues] = useState(productDetails);
  console.log(productDetails);

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };

  const handleSave = (e) => {
    e.preventDefault();
    editProduct(id, inpValues);
    navigate("/list");
  };

  return (
    <div className="containerAdd">
      <h1 className="titulAdd">Product edit</h1>
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
        <h1>gfdrtgsd</h1>
        <button className="save-btn" onClick={() => handleSave(inpValues)}>
          Save changes
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
