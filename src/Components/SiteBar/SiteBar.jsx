import { FormControl, InputAdornment, TextField} from '@mui/material';
import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import SideBarSort from './SiteBarSort';

import SearchIcon from '@mui/icons-material/Search';
import { useProducts } from '../../Context/CrudContextProvider';


const SideBar = () => {


  const [state, setState] = React.useState(''); 

  const handleChange = (event) => {
    setState(event.target.value);
  }

  const { searchFilter } = useProducts();



  return (
    <>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">SORT</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={state}
          onChange={handleChange}
          label="Sort"
        >
          <MenuItem value={'price'}>Price</MenuItem>
          <MenuItem value={'category'}>Category</MenuItem>
        </Select>
      </FormControl>
     

    
    <SideBarSort state={state} />


    </Box>
 </>
  );
};

export default SideBar;