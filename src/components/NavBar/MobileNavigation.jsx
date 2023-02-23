import React, { useState } from "react";
import NewUserBtn from "../UI/Button/NewUserBtn";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import {
  MdAccountCircle,
  MdShoppingCart,
  MdOutlineLogin,
} from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
const MobileNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuHandler = () => {
    setToggleMenu(false);
  };

  return (
    <nav className="app__navbar-phone">
      <img src={images.logo} alt="logo" />
      {!toggleMenu && (
        <HiMenu className="controlSvg" onClick={() => setToggleMenu(true)} />
      )}
      {toggleMenu && (
        <>
          <HiOutlineX className="controlSvg" onClick={toggleMenuHandler} />
          <motion.div
            className="app__navbar-menu"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <ul>
              {["home", "about", "mission", "contact"].map((data) => {
                return (
                  <motion.li
                    key={`link-${data}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link onClick={toggleMenuHandler} to={`/${data}`}>
                      {data}{" "}
                    </Link>
                  </motion.li>
                );
              })}
              <div>
                <MdAccountCircle onClick={toggleMenuHandler} />
                <MdShoppingCart onClick={toggleMenuHandler} />
                <Link to="/signup">
                  <NewUserBtn>
                    <AiOutlineUserAdd />
                    Sign Up
                  </NewUserBtn>
                </Link>
                <NewUserBtn>
                  <MdOutlineLogin />
                  &nbsp;Login
                </NewUserBtn>
              </div>
            </ul>
          </motion.div>
        </>
      )}
    </nav>
  );
};

export default MobileNavigation;
