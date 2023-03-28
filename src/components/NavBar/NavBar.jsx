import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import images from "../../constants/images";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import LoginModal from "../LoginModal/LoginModal";
import { motion } from "framer-motion";
import "./NavBar.scss";
import AuthOptions from "./AuthOptions";
import { useSelector } from "react-redux";
const Navbar = () => {
  const loginStatus = useSelector((state) => state.auth);
  const scrollStatus = useSelector((state) => state.scroll);
  const [loginModal, setLoginModal] = useState(false);
  return (
    <>
      {loginModal && (
        <LoginModal toggle={setLoginModal} loginStatus={loginStatus} />
      )}
      <nav
        className={`app__navbar ${
          scrollStatus.partialVisible && "on__scroll"
        }`}
      >
        <div className="app__navbar-logo">
          <Link to={"/home"}>
            <img src={images.logo} alt="logo" className="app__navbar-logo" />
          </Link>
        </div>
        <ul className="app__navbar-bullets">
          {["home", "about", "contact", "blog"].map((data) => {
            return (
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={`link-${data}`}
              >
                <NavLink
                  to={`/${data}`}
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  {data}
                  <div />
                </NavLink>
              </motion.li>
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
