import React from 'react';
import cart from '../../imgs/cart.png'
import user from '../../imgs/user.png'
import logo from '../../imgs/logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
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
        
    );
};

export default Header;