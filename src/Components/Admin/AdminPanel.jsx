import React, { useEffect } from 'react';
import { Box, Pagination} from '@mui/material';

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import "./AdminPanel.css"
import { useProducts } from '../../Context/CrudContextProvider';
import { CardMedia } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const AdminPanel = () => {
  const {deleteProduct, products, getProducts, page, setPage, count } = useProducts();
  const [searchParams, ] = useSearchParams();

  

  useEffect(() => {
    getProducts();
    console.log(products, "prod");
  }, []);

  useEffect(() => {
    getProducts();

}, [page, searchParams]); 



const handleChange = (e, p) => {
    setPage(p)

}


  return (
    <div>
      <Navbar/>
      <hr className="cartHR" />
      <div className="cartMain">
        <div className="cartTitles">
          <h3 className="cartTitle">Admin panel</h3>
          <span className="cartCount">2 products</span>
        </div>
        <div className="cartCards">
        {products.map((item) => (
                <div data-aos="flip-up" className="cartCard">
                  <div className="cartImg">
                  <CardMedia
                    sx={{width: '100%'}}
                      component="img"
                      image={item.image}
                      // alt={item.name}
                    />
                    {/* <img src={item.image} alt="" /> */}
                  </div>
                  <div className="cartInfo">
                    <h1 className="cardTitle">{item.title}</h1>
                    <p className='cardDesc'>{item.desc}</p>
                  </div>
                  <div className="iconsCart">
                    <div className="x_cart"><EditIcon/><DeleteOutlineIcon onClick={()=>deleteProduct(item.id)}/></div>
                    <span className="price_cart">{item.price}$</span>
                  </div>
                </div>
                ))}
          <hr className="cartHR2" />
        </div>
        </div>
        <Box sx={{ textAlign: 'center' }}>
                {products ? (

            <Box my={3} display="flex" justifyContent="center">
              <Pagination count={count} page={page} onChange={handleChange} />
            </Box>
            ) : ('')
        }
          </Box>
      <Footer/>
    </div>
  );
};

export default AdminPanel;