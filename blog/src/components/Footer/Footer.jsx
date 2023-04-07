import { useRef } from "react";
import images from "../../constants/images";
import Newsletter from "./Newsletter";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";
import { motion, useInView } from "framer-motion";
import SFooter from "./Footer.styles";
import { Link } from "react-router-dom";

const Footer = () => {
  const ref = useRef();
  const visible = useInView(ref, {
    margin: "-100px",
    once: true,
  });
  const stagger = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
        delay: 1.3,
      },
    },
  };
  const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
  const staggerAnimation = {
    initial: {
      x: 50,
    },
    animate: {
      x: 0,
      transition: { duration: 0.5, ...transition, delay: 1.3 },
    },
  };
  return (
    <SFooter ref={ref}>
      {visible && (
        <>
          <Newsletter />
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", delay: 0.5, duration: 0.5 }}
            initial={{ opacity: 0 }}
          >
            <img src={images.logo} alt="logo" />
            <motion.div variants={stagger} animate="animate" initial="initial">
              <motion.div variants={staggerAnimation}>
                <AiFillInstagram />
              </motion.div>
              <motion.div variants={staggerAnimation}>
                <AiFillFacebook />
              </motion.div>
              <motion.div variants={staggerAnimation}>
                <AiFillTwitterSquare />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", delay: 0.5, duration: 0.5 }}
            initial={{ opacity: 0 }}
          >
            <a href="/" rel="noreferrer">
              Celebritree
            </a>
            <Link to="/blog/credits">Credits</Link>
          </motion.div>
        </>
      )}
    </SFooter>
  );
};

export default Footer;
