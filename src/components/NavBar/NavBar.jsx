import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import LoginModal from "../LoginModal/LoginModal";
import {NewUserButton} from "../UI/Button/StyledButtons";
import {
  MdAccountCircle,
  MdShoppingCart,
  MdOutlineLogin,
} from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = (props) => {
  const [isOpen,setIsOpen] = useState(false);
  const body = document.querySelector("body");
  isOpen === true
    ? body.classList.add("overflow")
    : body.classList.remove("overflow");
  return (
    <>
      {isOpen && <LoginModal toggle={setIsOpen}/>}
      <nav className={`app__navbar ${props.bgColor && "on__scroll-active"}`}>
        <div className="app__navbar-logo">
          <Link to={"/home"}>
            <img src={images.logo} alt="logo" className="app__navbar-logo" />
          </Link>
        </div>
        <ul className="app__navbar-bullets">
          {["home", "about", "mission", "contact"].map((data) => {
            return (
              <motion.li
                key={`link-${data}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={`/${data}`}>{data}</Link>
                <div />
              </motion.li>
            );
          })}
        </ul>
        <div className="app__navbar-user-options">
          <MdAccountCircle />
          <MdShoppingCart />
          <Link to="/signup">
            <NewUserButton>
              <AiOutlineUserAdd />
              Sign Up
            </NewUserButton>
          </Link>

          <NewUserButton onClick={()=>setIsOpen(true)}>
            <MdOutlineLogin />
            &nbsp;Login
          </NewUserButton>
        </div>
      </nav>
      <MobileNavigation />
    </>
  );
};

export default Navbar;
