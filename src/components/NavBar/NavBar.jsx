import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import LoginModal from "../LoginModal/LoginModal";
import { motion } from "framer-motion";
import "./Navbar.scss";
import AuthOptions from "./AuthOptions";
import { useSelector } from "react-redux";
const Navbar = (props) => {
  const loginStatus = useSelector((state) => state.auth);
  const [loginModal, setLoginModal] = useState(false);
  return (
    <>
      {loginModal && (
        <LoginModal toggle={setLoginModal} loginStatus={loginStatus} />
      )}
      <nav className={`app__navbar ${props.bgColor && "on__scroll-active"}`}>
        <div className="app__navbar-logo">
          <Link to={"/home"}>
            <img src={images.logo} alt="logo" className="app__navbar-logo" />
          </Link>
        </div>
        <ul className="app__navbar-bullets">
          {["home", "about", "mission", "contact"].map((data) => {
            return (
              <Link to={`/${data}`} key={`link-${data}`}>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {data}
                  <div />
                </motion.li>
              </Link>
            );
          })}
        </ul>
        <AuthOptions setLoginModal={setLoginModal} loginStatus={loginStatus} />
      </nav>
      <MobileNavigation />
    </>
  );
};

export default Navbar;
