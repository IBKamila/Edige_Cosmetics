import React, { useState } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import "./AddProduct.css";
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../Context/CrudContextProvider';



const AddProduct = () => {
  const { addProduct } = useProducts()


  const [product, setProduct] = useState({
    title: '',
    desc: '',
    category: '',
    price: '',
    image: '',
  })

  const handleInp = (e) => {

    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    }
    setProduct(obj)
  }

  const handleInpFile = (e) => {

    let file= e.target.files[0]
    console.log(file);
    setProduct({
      ...product, 
      image: file
    })
  }

  const clearInput = () => {
    setProduct({
      title: '',
      desc: '',
      category: '',
      price: '',
      image: '',
  });
  };

  const handleSave = (e) => {
    e.preventDefault();
    addProduct(product);
    clearInput();
  };

  return (
    <div className="containerAdd">
      <h1 className="titulAdd">Product addition</h1>
      <div className='addForm'>
        <TextField
          sx={{marginBottom: '20px' }}
          className="inputAdd"
          id="standard-basic"
          label="Title"
          variant="standard"
          name="title"
          onChange={(e)=>{handleInp(e)}}
        />
        <TextField
        sx={{marginBottom: '20px' }}
          className="inputAdd"
          id="standard-basic"
          label="Description"
          variant="standard"
          name="desc"
          onChange={(e)=>{handleInp(e)}}
        />
        <FormControl fullWidth
        size="small"
        sx={{ borderColor: 'black' }}
        
      >
        <InputLabel id="demo-simple-select-label" >Category</InputLabel>
        <Select
        sx={{marginBottom: '20px' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name='category'
          // value={age}
          
          onChange={(e)=>{handleInp(e)}
          }
        >
          <MenuItem value={'Care'}>Care</MenuItem>
          <MenuItem value={'Decor'}>Decor</MenuItem>
          <MenuItem value={'Eyebrow'}>Eyebrow</MenuItem>
          <MenuItem value={'accessories'}>Accessories</MenuItem>
        </Select>
      </FormControl>
        <TextField
        sx={{marginBottom: '20px' }}
           className="inputAdd"
          id="standard-basic"
          label="Price"
          type="number"
          variant="standard"
          name="price"
          onChange={(e)=>{handleInp(e)}}
        />
        <TextField
          className="inputAdd"
          sx={{marginBottom: '10px' }}
          fullWidth
          id="outlined-helperText"
          helperText="insert picture"
          name='image'
          size="small"
          onChange={(e)=>{handleInpFile(e)}}
          type='file'
      
      />
      </div>
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
  
    </div>
   
  );
};

export default AddProduct;
