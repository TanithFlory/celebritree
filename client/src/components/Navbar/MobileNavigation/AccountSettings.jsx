import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeInWrapper } from "../../UI/Wrapper/MotionWrappers";
import images from "../../../constants/images";
const show = {
  opacity: 1,
};

const hide = {
  opacity: 0,
};

const AccountSettings = (props) => {
  return (
    <AnimatePresence>
      {props.toggle && (
        <motion.ul
          variants={props.ulVariants}
          className="app__navbar-account_settings"
        >
          <motion.li variants={props.variants} key={`link-${props.title}`}>
            {[
              { title: "settings", id: 1, icon: images.SettingsMob },
              { title: "change-password", id: 2, icon: images.ResetPassMob },
              { title: "help-centre", id: 3, icon: images.HelpCentreMob },
              {
                title: "my-contributions",
                id: 4,
                icon: images.ContributionsMob,
              },
            ].map((data) => {
              return (
                <Link to={`/${data.title}`} key={data.id}>
                  <FadeInWrapper
                    delay="0.2"
                    animate={props.toggle ? show : hide}
                  >
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
