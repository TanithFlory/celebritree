import React from "react";
import { motion } from "framer-motion";
import AirQualityIndex from "../AirQualityIndex/AirQualityIndex";
import { PrimaryButton } from "../UI/Button/StyledButtons";
import { scrollAbout } from "../Utils/scrolls";
import { Link } from "react-router-dom";
const AnimatedHeader = () => {
  const ease = [0.6, -0.05, 0.01, 0.99];
  const fadeIn = {
    initial: {
      y: 60,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 1,
        ease,
      },
    },
  };
  const letterAnimation = {
    initial: {
      x: -500,
    },
    animate: {
      x: 0,
      transition: { duration: 0.5, ease: [0.6, 0.03, -0.06, 1] },
    },
  };
  const stagger = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };
  return (
    <motion.div initial="initial" animate="animate" className="header__content">
      <motion.h2>
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.div variants={letterAnimation}>M</motion.div>
          <motion.div variants={letterAnimation}>a</motion.div>
          <motion.div variants={letterAnimation}>k</motion.div>
          <motion.div variants={letterAnimation}>e</motion.div>
          <motion.div variants={letterAnimation}>{"\u00A0"}W</motion.div>
          <motion.div variants={letterAnimation}>o</motion.div>
          <motion.div variants={letterAnimation}>r</motion.div>
          <motion.div variants={letterAnimation}>l</motion.div>
          <motion.div variants={letterAnimation}>d</motion.div>{" "}
          <motion.div variants={letterAnimation}>{"\u00A0"}A</motion.div>
        </motion.div>
      </motion.h2>
      <motion.h1>
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.div variants={letterAnimation}>B</motion.div>
          <motion.div variants={letterAnimation}>e</motion.div>
          <motion.div variants={letterAnimation}>t</motion.div>
          <motion.div variants={letterAnimation}>t</motion.div>
          <motion.div variants={letterAnimation}>e</motion.div>
          <motion.div variants={letterAnimation}>r</motion.div>
          <motion.div variants={letterAnimation}>{"\u00A0"}P</motion.div>
          <motion.div variants={letterAnimation}>l</motion.div>
          <motion.div variants={letterAnimation}>a</motion.div>
          <motion.div variants={letterAnimation}>c</motion.div>
          <motion.div variants={letterAnimation}>e</motion.div>
          <motion.div variants={letterAnimation}>{"\u00A0"}T</motion.div>
          <motion.div variants={letterAnimation}>o</motion.div>
          <motion.div variants={letterAnimation}>{"\u00A0"}L</motion.div>
          <motion.div variants={letterAnimation}>i</motion.div>
          <motion.div variants={letterAnimation}>v</motion.div>
          <motion.div variants={letterAnimation}>e</motion.div>
        </motion.div>
      </motion.h1>
      <motion.p variants={fadeIn}>
        "We believe in creating a better world by addressing two pressing global
        issues: starvation and climate change."
      </motion.p>
      <motion.div variants={fadeIn}>
        <PrimaryButton
          textColor="white"
          backgroundColor="green"
          onClick={() => scrollAbout()}
        >
          About
        </PrimaryButton>
        <PrimaryButton textColor="white" backgroundColor="green">
          <Link to="/contact"> Join Us</Link>
        </PrimaryButton>
      </motion.div>
      <motion.div variants={fadeIn}>
        <AirQualityIndex />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedHeader;
