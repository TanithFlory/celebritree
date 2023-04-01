import { useState } from "react";
import "./Footer.scss";
import images from "../../constants/images";
import NewsLetter from "./NewsLetter";
import { motion, useAnimation } from "framer-motion";
import useOnAnimation from "./useOnAnimation.footer";

const Footer = () => {
  const fadeInControl = useAnimation();
  const [linksRef, setLinksRef] = useState();

  useOnAnimation(linksRef, fadeInControl);
  const fadeInProps = {
    animate: fadeInControl,
    initial: { opacity: 0 },
  };
  return (
    <footer className="footer">
      <motion.div {...fadeInProps} custom={1} className="footer__heading">
        <h1>
          When we plant trees,
          <br /> we plant the <span>seeds of peace and seeds of hope.</span>
        </h1>
      </motion.div>
      <motion.div className="footer__links">
        <motion.div ref={setLinksRef} className="footer__links-wrapper">
          <motion.div {...fadeInProps} custom={2} id="socials">
            <img src={images.logo} alt="logo" />
            <div>
              <img src={images.Facebook} alt="facebook" />
              <img src={images.Twitter} alt="facebook" />
              <img src={images.Instagram} alt="facebook" />
            </div>
          </motion.div>
          <motion.div {...fadeInProps} custom={3} id="articles-1">
            {["Deforestation", "Climate Change", "World Environment Day"].map(
              (data, index) => {
                return (
                  <a
                    href={`#article1-${data
                      .replace(/[\s]/g, "-")
                      .toLowerCase()}`}
                    key={`article-1-${index}`}
                  >
                    {data}
                  </a>
                );
              }
            )}
          </motion.div>
          <motion.div {...fadeInProps} custom={4} id="articles-2">
            {["Celebritree", "Our Mission", "About AQI", "Anti Smog Trees"].map(
              (data, index) => {
                return (
                  <a
                    href={`article2-${data
                      .replace(/[\s]+/g, "-")
                      .toLowerCase()}`}
                    key={`article-2-${index}`}
                  >
                    {data}
                  </a>
                );
              }
            )}
          </motion.div>
          <motion.div {...fadeInProps} custom={5} id="newsletter">
            <NewsLetter />
          </motion.div>
        </motion.div>
        <motion.div custom={6} {...fadeInProps}>
          <h1>
            © {new Date().getFullYear()} <span>Celebritree</span> All rights
            reserved.
          </h1>
          <a>Privacy Policy</a>
          <a>Terms and usage</a>
          <a>Contact</a>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
