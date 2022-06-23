import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useProducts } from "../../Context/CrudContextProvider";

const SideBarSort = ({ state }) => {
  const { fetchByParams } = useProducts();

  if (state === "price") {
    return (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          onChange={(e) => fetchByParams(state, e.target.value)}
        >
          <FormControlLabel
            value="all"
            control={<Radio color="error" />}
            label="All"
          />

          <FormControlLabel
            value="desc"
            control={<Radio color="error" />}
            label="from largest to smallest"
          />

          <FormControlLabel
            value="asc"
            control={<Radio color="error" />}
            label="from smallest to largest"
          />
        </RadioGroup>
      </FormControl>
    );
  } else if (state === "category") {
    return (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          onChange={(e) => fetchByParams(state, e.target.value)}
        >
          <FormControlLabel
            value="all"
            control={<Radio color="error" />}
            label="All"
          />

          <FormControlLabel
            value="care"
            control={<Radio color="error" />}
            label="Care"
          />

          <FormControlLabel
            value="decor"
            control={<Radio color="error" />}
            label="Decor"
          />

          <FormControlLabel
            value="eyebrow"
            control={<Radio color="error" />}
            label="Eyebrow"
          />
          <FormControlLabel
            value="accessories"
            control={<Radio color="error" />}
            label="Accessories"
          />
          <FormControlLabel
            value="Аксессуары и PRO"
            control={<Radio color="error" />}
            label="Pars. products"
          />
        </RadioGroup>
      </FormControl>
    );
  }
};

export default SideBarSort;
