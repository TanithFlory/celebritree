import React, { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import MenuToggle from "./MenuToggle";
import NavigationLinks from "./NavigationLinks";
import "./MobileNavigation.scss";

const MobileNavigation = () => {
  const sidebar = {
    open: (height = 300) => ({
      clipPath: `circle(${height * 2 + 200}px at 30px 20px)`,
      transition: {
        type: "spring",
        stiffness: 20,
      },
    }),
    closed: {
      clipPath: "circle(25px at 260px 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 60,
      },
    },
  };

  const [isOpen, toggleOpen] = useCycle(false, true);
  const [enableBtn, setEnableBtn] = useCycle(false, true);
  const navRef = useRef();
  /*Animation requires certain time to close, setTimeout was causing issues. Hence the following code. */
  // const toggler = () => {
  //   if (isOpen) {
  //     toggleOpen();
  //     setEnableBtn();
  //     setTimeout(() => {
  //       navRef.current.classList.remove("expanded");
  //       setEnableBtn();
  //     }, 600);
  //   } else {
  //     toggleOpen();
  //     navRef.current.classList.add("expanded");
  //   }
  // };
  useEffect(() => {
    if (!isOpen) {
      setEnableBtn();
      setTimeout(() => {
        navRef.current?.classList.remove("expanded");
        setEnableBtn();
      }, 700);
    }
    return () => {
      navRef.current?.classList.add("expanded");
    };
  }, [isOpen]);
  return (
    <motion.nav
      ref={navRef}
      className="app__navbar-mobile"
      animate={isOpen ? "open" : "closed"}
      initial={false}
    >
      <>
        <motion.div className="background" variants={sidebar} />
        <NavigationLinks onClick={toggleOpen} />
      </>
      <MenuToggle toggle={() => toggleOpen()} disabled={enableBtn} />
    </motion.nav>
  );
};
export default MobileNavigation;
