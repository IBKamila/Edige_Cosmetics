import React from 'react';
import cart from '../../imgs/cartWhite.png'
import user from '../../imgs/userWhite.png'
import logo from '../../imgs/logoWhite.svg'
import "./Header.css"
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/bundle";


const Header = () => {
    return (
        <div className='headerMain'>
        <nav className='navHead'>
                <div className='navLists'>
                    <NavLink to='/list'>
                      <span className='navListW'>Catalog</span>
                    </NavLink>
                    <span className='navListW'>About</span>
                    <span className='navListW'>Delivery</span>
                </div>
                <div className='navLogo'>
                    <NavLink to="/">
                        <img id='navLogo' src={logo} alt="logo_icon" />
                    </NavLink>
                </div>
                <div className='navIcons'>
                <span className='navListW textNav'>Contacts</span>
                    <input
                    className="navIcon search-inpW"
                    type="search"
                    aria-label="Search"
                    />
                <NavLink to="/cart"> 
                  <img className='navIcon' src={cart} alt="cart_icon"/>
                </NavLink>  
                <img className='navIcon' src={user} alt="user_icon"/>
                </div>
        </nav>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper1'>Capsule Collection</SwiperSlide>
        <SwiperSlide className='swiper2'>Slide 2</SwiperSlide>
        <SwiperSlide className='swiper3'>Slide 3</SwiperSlide>
      </Swiper>
      </div>    
    );
};

export default Header;