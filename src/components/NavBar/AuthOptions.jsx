import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, useCycle } from "framer-motion";
import { SecondaryButton } from "../UI/Button/StyledButtons";
import {
  MdAccountCircle,
  MdOutlineLogin,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FadeInWrapper } from "../UI/Wrapper/MotionWrappers";

const AuthOptions = (props) => {
  const [extraOptions, setExtraOptions] = useCycle(false, true);
  return (
    <div className="app__navbar-user-options">
      <div
        onMouseEnter={() => setExtraOptions()}
        onMouseLeave={() => setExtraOptions()}
      >
        {props.loginStatus && (
          <SecondaryButton>
            <MdAccountCircle />
            Account
          </SecondaryButton>
        )}
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
      {!props.loginStatus && (
        <>
          <Link to="/signup">
            <SecondaryButton>
              <AiOutlineUserAdd />
              Sign Up
            </SecondaryButton>
          </Link>
          <SecondaryButton onClick={() => props.setLoginModal(true)}>
            <MdOutlineLogin />
            Login
          </SecondaryButton>
        </>
      )}
    </div>
  );
};

export default AuthOptions;
