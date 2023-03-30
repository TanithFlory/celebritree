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
import { useDispatch } from "react-redux";
import { authActions } from "../../store/features/auth/authSlice";

const AuthOptions = (props) => {
  const dispatch = useDispatch();
  const [extraOptions, setExtraOptions] = useCycle(false, true);
  const currentTime = new Date().getHours();

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    dispatch(authActions.logout());
    window.location.replace("/");
  };

  return (
    <div className="app__navbar-user-options">
      <div
        onMouseEnter={() => setExtraOptions()}
        onMouseLeave={() => setExtraOptions()}
      >
        {props.loginStatus.isLogged && (
          <SecondaryButton backgroundColor="transparent">
            <MdAccountCircle />
            Account
          </SecondaryButton>
        )}
        <AnimatePresence>
          {extraOptions && props.loginStatus.isLogged && (
            <FadeInWrapper>
              <Link to="/account/settings">
                <SecondaryButton backgroundColor="var(--lightgreen-color)">
                  <MdSettings />
                  Settings
                </SecondaryButton>
              </Link>
              <SecondaryButton
                onClick={logoutHandler}
                backgroundColor="var(--lightgreen-color)"
              >
                <MdLogout />
                Sign Out
              </SecondaryButton>
            </FadeInWrapper>
          )}
        </AnimatePresence>
      </div>
      {props.loginStatus.isLogged && (
        <div>
          <h3>
            {currentTime < 12
              ? "Good Morning"
              : currentTime < 16
              ? "Good Afternoon"
              : currentTime < 24
              ? "Good Evening"
              : "Hello,"}{" "}
            <br />
            {props.loginStatus.firstName}!
          </h3>
        </div>
      )}
      {!props.loginStatus.isLogged && (
        <>
          <Link to="/signup">
            <SecondaryButton backgroundColor="transparent">
              <AiOutlineUserAdd />
              Sign Up
            </SecondaryButton>
          </Link>
          <SecondaryButton
            backgroundColor="transparent"
            onClick={() => props.setLoginModal(true)}
          >
            <MdOutlineLogin />
            Login
          </SecondaryButton>
        </>
      )}
    </div>
  );
};

export default AuthOptions;
