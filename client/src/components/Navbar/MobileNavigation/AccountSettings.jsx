import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeInWrapper } from "../../UI/Wrapper/MotionWrappers";
import images from "../../../constants/images";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/features/auth/authSlice";
const show = {
  opacity: 1,
};

const hide = {
  opacity: 0,
};

const AccountSettings = (props) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    dispatch(authActions.logout());
    window.location.replace("/");
  };

  return (
    <AnimatePresence>
      {props.toggle && (
        <motion.ul
          variants={props.ulVariants}
          className="app__navbar-account_settings"
        >
          <motion.li variants={props.variants} key={`link-${props.title}`}>
            {[
              { title: "settings", icon: images.SettingsMob },
              { title: "change-password", icon: images.ResetPassMob },
              { title: "help-centre", icon: images.HelpCentreMob },
              {
                title: "my-contributions",

                icon: images.ContributionsMob,
              },
              { title: "logout", icon: images.LogoutMob, logout: true },
            ].map((data, index) => {
              return (
                <Link
                  to={`/account/${data.title}`}
                  key={`link-${index}`}
                  onClick={() =>
                    !data.logout ? props.toggleOpen() : logoutHandler
                  }
                >
                  <FadeInWrapper animate={props.toggle ? show : hide}>
                    <div className="app__navbar-phone-icon" style={props.style}>
                      <img src={data.icon} alt={data.title} />
                    </div>
                    <div className="app__navbar-phone-text" style={props.style}>
                      {data.title.replace(/[-]+/g, " ")}
                    </div>
                  </FadeInWrapper>
                </Link>
              );
            })}
          </motion.li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default AccountSettings;
