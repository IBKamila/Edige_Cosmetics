import React from 'react';
import TextField from '@mui/material/TextField';


const Order = () => {
    return (
        <>
        <div className='ordLeft'>
            <h1>Checkout</h1>
            <div className='ordInps'>
            <TextField id="standard-basic" label="Surname, name and patronymic" variant="standard" />
            {/* <TextField id="standard-basic" label="Country, city, address" variant="standard" />
            <TextField id="standard-basic" label="Contact number" variant="number" />
            <TextField id="standard-basic" label="Email" variant="standard" /> */}
            </div>
        </div>
        <div className='ordRight'></div>
        </>
    );
};

export default Order;