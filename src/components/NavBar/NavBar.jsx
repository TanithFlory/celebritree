import React from "react";
import images from "../../constants/images";
import MobileNavigation from "./MobileNavigation";
import NewUserBtn from "../UI/Button/NewUserBtn";
import {
  MdAccountCircle,
  MdShoppingCart,
  MdOutlineLogin,
} from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { motion } from "framer-motion";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" className="app__navbar-logo" />
        </div>
        <ul className="app__navbar-bullets">
          {["home", "about", "mission", "contact"].map((data) => {
            return (
              <motion.li
                key={`link-${data}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={`#${data}`}>{data}</a>
                <div />
              </motion.li>
            );
          })}
        </ul>
        <div className="app__navbar-user-options">
          <MdAccountCircle />
          <MdShoppingCart />
          <NewUserBtn>
            <AiOutlineUserAdd />
            Sign Up
          </NewUserBtn>
          <NewUserBtn>
            <MdOutlineLogin />
            &nbsp;Login
          </NewUserBtn>
        </div>
      </nav>
      <MobileNavigation />
    </>
  );
};

export default NavBar;
