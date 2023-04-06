import React from "react";
import { Link } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import AccountSettings from "./AccountSettings";
import images from "../../../constants/images";
import { useSelector } from "react-redux";
import { scrollAbout } from "../../Utils/scrolls";
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
  const isLogged = useSelector((state) => state.auth.isLogged);
  const [toggle, setToggle] = useCycle(false, true);
  return (
    <motion.ul variants={ulVariants}>
      {[
        { title: "home", icon: images.HomeMob },
        { title: "about", icon: images.AboutMob },
        { title: "contact", icon: images.ContactMob },
        { title: "blog", icon: images.MissionMob, link: `/blog/` },
        {
          title: "account",
          icon: images.UserMob,
          link: true,
          isLogged: !isLogged,
        },
        { title: "login", icon: images.LoginMob, isLogged },
        { title: "signup", icon: images.SignupMob, isLogged },
      ].map((data, index) => {
        const style = { border: `2px solid ${colors[index]}` };
        return (
          !data.isLogged && (
            <React.Fragment key={index}>
              <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={data.link ? data.link : `/${data.title}`}
                  onClick={() => {
                    data.title === "account"
                      ? setToggle()
                      : data.title === "about"
                      ? scrollAbout()
                      : props.toggleOpen();
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
                  toggleOpen={props.toggleOpen}
                />
              )}
            </React.Fragment>
          )
        );
      })}
    </motion.ul>
  );
};

export default NavigationLinks;
