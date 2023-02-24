import React, { useContext } from "react";
import ScrollContext from "../../constants/scroll-context";
import { Link } from "react-router-dom";
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
import "./Navbar.scss";

const Navbar = () => {

  const visible = useContext(ScrollContext);
  return (
    <>
      <nav
        className={`app__navbar ${visible.isVisible && "on__scroll-active"}`}
      >
        <div className="app__navbar-logo">
          <Link to={'/home'}><img src={images.logo} alt="logo" className="app__navbar-logo" /></Link>
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
      </nav>
      <MobileNavigation />
    </>
  );
};

export default Navbar;
