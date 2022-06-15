import React from 'react';
import cart from '../../imgs/cart.png'
import user from '../../imgs/user.png'
import logo from '../../imgs/logo.svg'
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


const Header = () => {
    return (
        <div>
        <nav className='navBar'>
                <div className='navLists'>
                    <span className='navList'>Catalog</span>
                    <span className='navList'>About</span>
                    <span className='navList'>Delivery</span>
                </div>
                <div className='navLogo'>
                    <NavLink to="/">
                        <img id='navLogo' src={logo} alt="logo_icon" />
                    </NavLink>
                </div>
                <div className='navIcons'>
                <span className='navList textNav'>Contacts</span>
                    <input
                    className="navIcon search-inp"
                    type="search"
                    aria-label="Search"
                    />
                <img className='navIcon' src={cart} alt="cart_icon"/>
                <img className='navIcon' src={user} alt="user_icon"/>
                </div>
        </nav>
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>    
    );
};

export default Header;