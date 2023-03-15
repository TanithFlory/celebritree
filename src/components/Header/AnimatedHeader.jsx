import React from "react";
import { motion } from "framer-motion";
import AirQualityIndex from "../AirQualityIndex/AirQualityIndex";
import { PrimaryButton } from "../UI/Button/StyledButtons";

const AnimatedHeader = () => {
  let easeing = [0.6, -0.05, 0.01, 0.99];
  const fadeIn = {
    initial: {
      y: 60,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: easeing,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 1,
        ease: easeing,
      },
    },
  };
  const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
  const letterAnimation = {
    initial: {
      x: -500,
    },
    animate: {
      x: 0,
      transition: { duration: 0.5, ...transition },
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
          <motion.div variants={letterAnimation}>{"\u00A0"}a</motion.div>
        </motion.div>
      </motion.h2>
      <motion.h1>
        {" "}
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.div variants={letterAnimation}>Better</motion.div>
          <motion.div variants={letterAnimation}>{"\u00A0"}Place</motion.div>
          <motion.div variants={letterAnimation}>{"\u00A0"}To</motion.div>
          <motion.div variants={letterAnimation}>{"\u00A0"}Live</motion.div>
        </motion.div>
      </motion.h1>
      <motion.p variants={fadeIn}>
        "We believe in creating a better world by addressing two pressing global
        issues: starvation and climate change."
      </motion.p>
      <motion.div variants={fadeIn}>
        <PrimaryButton textColor="white" backgroundColor="green">
          About
        </PrimaryButton>
        <PrimaryButton textColor="white" backgroundColor="green">
          Join Us
        </PrimaryButton>
      </motion.div>
      <motion.div variants={fadeIn}>
        <AirQualityIndex />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedHeader;
