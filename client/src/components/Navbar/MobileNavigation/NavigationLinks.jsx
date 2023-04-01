import React from "react";
import { Link } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import AccountSettings from "./AccountSettings";
import images from "../../../constants/images";
const colors = [
  "#53C24D",
  "#534DC2",
  "#022B3A",
  "#E39735",
  "#4400FF",
  "#44009B",
  "#7E3C9B",
  "#009735",
];
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const NavigationLinks = (props) => {
  const [toggle, setToggle] = useCycle(false, true);
  return (
    <motion.ul variants={ulVariants}>
      {[
        { title: "home", icon: images.HomeMob },
        { title: "about", icon: images.AboutMob },
        { title: "mission", icon: images.MissionMob },
        { title: "contact", icon: images.ContactMob },
        { title: "account", icon: images.UserMob, link: null },
        { title: "login", icon: images.LoginMob },
        { title: "signup", icon: images.SignupMob },
        { title: "cart", icon: images.ShoppingCartMob },
      ].map((data, index) => {
        const style = { border: `2px solid ${colors[index]}` };
        return (
          <React.Fragment key={index}>
            <motion.li
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={data.title === "account" ? data.link : `/${data.title}`}
                onClick={() => {
                  data.title === "account" ? setToggle() : props.onClick();
                }}
              >
                <div className="app__navbar-phone-icon" style={style}>
                  <img src={data.icon} alt={data.title} />
                </div>
                <div className="app__navbar-phone-text" style={style}>
                  {data.title}
                </div>
              </Link>
            </motion.li>
            {data.title === "account" && (
              <AccountSettings
                toggle={toggle}
                title={data.title}
                variants={variants}
                ulVariants={ulVariants}
                style={style}
              />
            )}
          </React.Fragment>
        );
      })}
    </motion.ul>
  );
};

export default NavigationLinks;
