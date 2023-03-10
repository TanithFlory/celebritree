import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import LoginModal from "../LoginModal/LoginModal";
import { SecondaryButton } from "../UI/Button/StyledButtons";
import {
  MdAccountCircle,
  MdOutlineLogin,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import "./Navbar.scss";
import { FadeInWrapper } from "../UI/Wrapper/MotionWrappers";
const Navbar = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [extraOptions, setExtraOptions] = useCycle(false, true);

  return (
    <>
      {loginModal && <LoginModal toggle={setLoginModal} />}
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
          <div
            onMouseEnter={() => setExtraOptions()}
            onMouseLeave={() => setExtraOptions()}
          >
            <SecondaryButton>
              <MdAccountCircle />
              Account
            </SecondaryButton>
            <AnimatePresence>
              {extraOptions && (
                <FadeInWrapper>
                  <Link to="/account/settings">
                    <SecondaryButton backgroundColor="var(--green-color)">
                      <MdSettings />
                      Settings
                    </SecondaryButton>
                  </Link>
                  <SecondaryButton backgroundColor="var(--green-color)">
                    <MdLogout />
                    Sign Out
                  </SecondaryButton>
                </FadeInWrapper>
              )}
            </AnimatePresence>
          </div>
          <Link to="/signup">
            <SecondaryButton>
              <AiOutlineUserAdd />
              Sign Up
            </SecondaryButton>
          </Link>

          <SecondaryButton onClick={() => setLoginModal(true)}>
            <MdOutlineLogin />
            Login
          </SecondaryButton>
        </div>
      </nav>
      <MobileNavigation />
    </>
  );
};

export default Navbar;
