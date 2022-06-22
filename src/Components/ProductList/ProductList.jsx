import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Filter from '../Filter/Filter';
import Cat from "../../imgs/carecat.png"
import "./ProductList.css"
import { useProducts } from '../../Context/CrudContextProvider';
import { Box, Pagination} from '@mui/material';
import { useSearchParams } from "react-router-dom";
import SideBar from '../SiteBar/SiteBar';




const ProductList = () => {
    const { products, getProducts, page, setPage, count } = useProducts();
    const [searchParams, ] = useSearchParams();
    const filterProducts = products.filter(product => product.category != "Аксессуары и PRO");
    filterProducts.map((item) => {
        console.log(item.category, "items")
    })

    useEffect(() => {
        getProducts();
    
    }, []);
    
    useEffect(() => {
        getProducts();
    
    }, [page, searchParams]); 
    
    
    
    const handleChange = (e, p) => {
        setPage(p)
    
    }


    return (
        <>
        <Navbar/>
        <SideBar />

            <br/>
            <br/>
            <div className='contCat'>
            
                <div className="cards_list card_holder">
                {products.map((item) => (
                <div className="card_list card_home cardProd_home">
                    <img className="card_imgP"  src={`https://${item.image}` }alt="care_img" />
                    <h1 className="h1homeProd">{item.title}</h1>
                    <h1 className="h1homePrice">{item.price}</h1>;
                </div>
                ))}
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
        </>
        );
};

export default ProductList;