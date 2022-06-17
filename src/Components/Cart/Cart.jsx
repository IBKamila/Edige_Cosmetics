import React from 'react';
import "./Cart.css"
import fill from "../../imgs/fill.png"
import x from "../../imgs/+.png"
import v from "../../imgs/vector.png"
import mask from "../../imgs/Mask.png"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const Cart = () => {
    
    return (
        <>
        <Navbar/>
        <hr className='cartHR' />
        <div className='cartMain'>
                <div className='cartTitles'><h3 className='cartTitle'>Your cart</h3><span className='cartCount'>2 products</span></div>
                <div className='cartCards'>
                    <div data-aos="flip-left" className='cartCard'>
                        <div className='cartImg'>
                            <img src={mask} alt="" />
                        </div>
                        <div className='cartInfo'>
                            <h1 className='cardTitle'>Title</h1>
                            <span className='cartFav'> <img className='favImg' src={fill} alt="heart_img" /> Add to favorites</span>
                            <input className='cartInp' type="number" id="input" readonly/>
                        </div>
                        <div className='iconsCart'>
                            <img className='x_cart' src={x} alt="x_img" />
                            <span className='price_cart'>54 €</span>
                        </div>
                    </div>
                    <div className='cartCard'>
                        <div className='cartImg'>
                            <img src={mask} alt="car" />
                        </div>
                        <div className='cartInfo'>
                            <h1 className='cardTitle'>Title</h1>
                            <span className='cartFav'> <img className='favImg' src={fill} alt="heart_img" /> Add to favorites</span>
                            <input className='cartInp' type="number" id="input" readonly/>
                        </div>
                        <div className='iconsCart'>
                            <img className='x_cart' src={x} alt="x_img" />
                            <span className='price_cart'>54 €</span>
                        </div>
                    </div>
                    <hr className='cartHR2' />
                    <div className='cartOrd'>
                        <div className='cartTP'>
                            <h2 className='cartTot'>Total: 108 €</h2>
                        </div>
                        <button className='cartBtn'>Place an order <img src={v}/> </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Cart;