import React, { useState } from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import "./Header.scss";
import AnimatedHeader from "./AnimatedHeader";
import useOnScroll from "../../CustomHooks/useOnScroll";
const Header = () => {
  const scrollHandler = () => {
    const cardWrapper = document.getElementsByClassName(
      "react-multi-carousel-list"
    )[0];
    if (cardWrapper) {
      cardWrapper.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };
  const [ref, setRef] = useState();
  const options = {
    threshold: 0.8,
  };
  useOnScroll(ref, options);
  return (
    <>
      <header ref={setRef}>
        <motion.div initial="initial" animate="animate" className="header">
          <motion.div
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="header__bg"
          >
            <img src={images.mainTree} alt="" />
            <div className="animated_header-wrapper">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration:1, delay: 1 }}
              >
                <img
                  alt="contribute"
                  src={images.contribute}
                  className="header__main-button"
                  onClick={scrollHandler}
                />
              </motion.div>

              <AnimatedHeader />
            </div>
          </motion.div>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
