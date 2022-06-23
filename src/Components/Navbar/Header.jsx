import React, { useState } from "react";
import cart from "../../imgs/cartWhite.png";
import user from "../../imgs/userWhite.png";
import logo from "../../imgs/logoWhite.svg";
import burger from "../../imgs/burger.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { useProducts } from "../../Context/CrudContextProvider";
import { ADMIN } from "../../helpers/consts";
import { useAuth } from "../../Context/AuthContext";

const Header = () => {
  const { userName, logout, checkAuth } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="headerMain">
      <nav className="navHead">
        <img src={burger} alt="burger" id="burger" />
        <div className="navLists">
          <NavLink to="/list">
            <span className="navListW">Catalog</span>
          </NavLink>
          <NavLink to="/about">
            <span className="navListW">About</span>
          </NavLink>
          <NavLink to="/">
            <span className="navListW">Delivery</span>
          </NavLink>
        </div>
        <div className="navLogo">
          <NavLink to="/">
            <img id="navLogo" src={logo} alt="logo_icon" />
          </NavLink>
        </div>
        <div className="navIcons">
          <NavLink to="/contacts">
            <span className="navListW textNav">Contacts</span>
          </NavLink>
          <input
            className="navIcon search-inpW"
            type="search"
            aria-label="Search"
            id="search"
          />
          <NavLink to="/cart">
            <img className="navIcon" src={cart} alt="cart_icon" id="cartIcon" />
          </NavLink>
          <img
            onClick={handleClick}
            className="navIcon"
            src={user}
            alt="user_icon"
            id="userMan"
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
            {userName == ADMIN ? (
              <NavLink to="/admin">
                <MenuItem>
                  <Avatar /> Admin
                </MenuItem>
              </NavLink>
            ) : (
              ""
            )}
            <Divider />
            <NavLink to="/auth">
              <MenuItem>
                <ListItemIcon>
                  <LoginIcon fontSize="small" />
                </ListItemIcon>
                Login
              </MenuItem>
            </NavLink>
            <NavLink to="/registr">
              <MenuItem>
                <ListItemIcon>
                  <AssignmentIndOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Sign In
              </MenuItem>
            </NavLink>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
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
        <SwiperSlide className="swiper1">Capsule Collection</SwiperSlide>
        <SwiperSlide className="swiper2">Caring for your skin</SwiperSlide>
        <SwiperSlide className="swiper3">Individual approach</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
