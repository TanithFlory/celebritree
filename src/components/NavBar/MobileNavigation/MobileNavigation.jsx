import * as React from "react";
import { motion, useCycle } from "framer-motion";
import MenuToggle from "./MenuToggle";
import NavigationLinks from "./NavigationLinks";
import "./MobileNavigation.scss";

const MobileNavigation = () => {
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 30px 20px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(25px at 260px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      className="app__navbar-mobile"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div className="background" variants={sidebar} />
      <NavigationLinks />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
export default MobileNavigation;
