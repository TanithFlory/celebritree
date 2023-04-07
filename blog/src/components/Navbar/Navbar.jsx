import { Link } from "react-router-dom";
import images from "../../constants/images";
import SNav from "./Navbar.styles";
import { motion } from "framer-motion";
import scrollTop from "../Utils/scrollTop";
const Navbar = () => {
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
      },
    },
  };
  const scrollHandler = () => {
    const articleList = document.getElementById("article-list");
    if (articleList) {
      articleList.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };
  return (
    <SNav>
      <motion.ul animate="animate" initial="initial" variants={topDown}>
        <Link to={`/blog/home`}>
          <li onClick={() => scrollTop()}>Home</li>
        </Link>
        <img src={images.logo} alt="logo" />
        <li onClick={scrollHandler}>Articles</li>
      </motion.ul>
    </SNav>
  );
};

export default Navbar;
