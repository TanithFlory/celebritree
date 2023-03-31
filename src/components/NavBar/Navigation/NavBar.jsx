import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import images from "../../../constants/images";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import LoginModal from "../../LoginModal/LoginModal";
import { motion } from "framer-motion";
import AuthOptions from "./AuthOptions";
import { useSelector } from "react-redux";
import scrollTop from "../../Utils/scrollTop";
import { stagger, topDown } from "./Navbar.animations";
import "./NavBar.scss";

const Navbar = () => {
  const loginStatus = useSelector((state) => state.auth);
  const scrollStatus = useSelector((state) => state.scroll);
  const [loginModal, setLoginModal] = useState(false);
  const scrollHandler = (type) => {
    if (type === "about") {
      const aboutUs = document.getElementsByClassName("about__socials")[0];
      aboutUs.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
    if (type === "home") {
      scrollTop();
    }
  };
  return (
    <>
      {loginModal && (
        <LoginModal toggle={setLoginModal} loginStatus={loginStatus} />
      )}
      <motion.nav
        initial="initial"
        animate="animate"
        className={`app__navbar ${scrollStatus.partialVisible && "on__scroll"}`}
      >
        <motion.div variants={topDown} className="app__navbar-logo">
          <Link to={"/home"} onClick={() => scrollTop()}>
            <img src={images.logo} alt="logo" className="app__navbar-logo" />
          </Link>
        </motion.div>
        <motion.ul variants={stagger} className="app__navbar-bullets">
          {["home", "about", "contact", "blog"].map((data) => {
            return (
              <motion.li
                variants={topDown}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={`link-${data}`}
                onClick={() =>
                  data === "about"
                    ? scrollHandler("about")
                    : "home"
                    ? scrollHandler("home")
                    : null
                }
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
        </motion.ul>
        <AuthOptions
          variants={topDown}
          setLoginModal={setLoginModal}
          loginStatus={loginStatus}
        />
      </motion.nav>
      <MobileNavigation />
    </>
  );
};

export default Navbar;
