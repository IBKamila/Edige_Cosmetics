import React, { useContext, useEffect, useState } from "react";
import cart from "../../imgs/cart.png";
import user from "../../imgs/user.png";
import logo from "../../imgs/logo.svg";
import burger from "../../imgs/burger.svg";
import "./Navbar.css";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import Header from "./Header";
import { cartContext } from "../../Context/CartContext";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import { useProducts } from "../../Context/CrudContextProvider";


const Navbar = (props) => {
  const { cartLength } = useContext(cartContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { searchFilter } = useProducts();


  if (props.location === "home") {
    return <Header />;
  } else {
    return (
      <nav className="navBar">
        <img src={burger} alt="burger" id="burger" />
        <div className="navLists">
          <NavLink to="/list">
            <span className="navList">Catalog</span>
          </NavLink>
          <NavLink to="/about">
            <span className="navList">About</span>
          </NavLink>
          <span className="navList">Delivery</span>
        </div>

        <div className="navLogo">
          <NavLink to="/">
            <img id="navLogo" src={logo} alt="logo_icon" />
          </NavLink>
        </div>
        <div className="navIcons">
          <NavLink to="/contacts">
            <span className="navList textNav">Contacts</span>
          </NavLink>
          <input
            className="navIcon search-inp"
            type="search"
            aria-label="Search"
            onChange={(e) => 
              console.log(searchFilter(e.target.value))}
            id="search"
          />

          {}

          <NavLink to="/cart">
            <img className="navIcon" src={cart} alt="cart_icon" id="cartIcon" />
          </NavLink>
          <img
            onClick={handleClick}
            className="navIcon"
            id="userMan"
            src={user}
            alt="user_icon"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          />
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <LoginIcon fontSize="small" />
              </ListItemIcon>
              Login
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <AssignmentIndOutlinedIcon fontSize="small" />
              </ListItemIcon>
              Sign In
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </nav>
    );
  }
};

export default Navbar;
