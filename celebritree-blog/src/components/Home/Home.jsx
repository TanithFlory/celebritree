import SHome from "./Home.styles";
import VerticalCarousel from "../Carousel/VerticalCarousel/VerticalCarousel";
import HorizontalCarousel from "../Carousel/HorizontalCarousel/HorizontalCarousel";
import ArticleNavigation from "../Articles/Navigation/ArticleNavigation";
import Pagebreak from "../UI/Pagebreak";
import { motion } from "framer-motion";
import scrollTop from "../Utils/scrollTop";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    scrollTop();
  }, [scrollTop]);

  const topDown = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeIn",
        duration: 0.6,
        delay: 0.35,
      },
    },
  };

  const fade = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <SHome>
      <motion.h1 variants={topDown} initial="initial" animate="animate">
        CELEBRITREE
      </motion.h1>
      <motion.div
        animate="animate"
        initial="initial"
        variants={fade}
        className="home__carousels"
      >
        <HorizontalCarousel />
        <VerticalCarousel />
      </motion.div>
      <Pagebreak margin="3rem 0 2rem" />
      <ArticleNavigation />
    </SHome>
  );
};

export default Home;
