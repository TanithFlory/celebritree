import * as React from "react";
import { motion } from "framer-motion";
import images from "../../../constants/images";
const colors = ["#53C24D", "#534DC2", "#022B3A", "#E39735", "#4400FF","#44009B","#7E3C9B","#009735"];
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

const NavigationLinks = () => (
  <motion.ul>
    {[
      { title: "Home", icon: images.Home },
      { title: "About", icon: images.About },
      { title: "Mission", icon: images.Mission },
      { title: "Contact", icon: images.Contact },
      { title: "Account", icon: images.UserMob },
      { title: "Login", icon: images.LoginMob },
      { title: "Signup", icon: images.SignupMob },
      { title: "Cart", icon: images.ShoppingCartMob },
    ].map((data, index) => {
      const style = { border: `2px solid ${colors[index]}` };
      return (
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          key={`link-${data}`}
        >
          <div className="app__navbar-phone-icon" style={style}>
            <img src={data.icon} alt={data.title} />
          </div>
          <div className="app__navbar-phone-text" style={style}>
            {data.title}
          </div>
        </motion.li>
      );
    })}
  </motion.ul>
);

export default NavigationLinks;
