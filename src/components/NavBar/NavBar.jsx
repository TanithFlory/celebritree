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
  const loginStatus = useSelector((state) => state.login);
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
        <AuthOptions
          setLoginModal={setLoginModal}
          loginStatus={loginStatus.isLogged}
        />
      </nav>
      <MobileNavigation />
    </>
  );
};

export default Navbar;
