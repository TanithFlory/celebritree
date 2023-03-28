import React, { useState } from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import "./Header.scss";
import AnimatedHeader from "./AnimatedHeader";
import useOnScroll from "../../CustomHooks/useOnScroll";
const Header = () => {
  const scrollHandler = () => {
    // const cardWrapper = document.getElementById("card-wrapper");
    // if (cardWrapper) {
    //   cardWrapper.scrollIntoView({ behavior: "smooth" });
    // }
  };
  const [ref, setRef] = useState();
  const options = {
    threshold: 0.85,
  };
  useOnScroll(ref, options);
  return (
    <>
      <header ref={setRef}>
        <motion.div initial="initial" animate="animate" className="header">
          <AnimatedHeader />
          <motion.div
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="header__svg"
          >
            <img
              alt="contribute"
              src={images.contribute}
              className="header__main-button"
              onClick={scrollHandler}
            />
            <img src={images.mainTree} alt="" />
          </motion.div>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
