import { useState } from "react";
import images from "../../constants/images";
import NewsLetter from "./NewsLetter/NewsLetter";
import { motion, useAnimation } from "framer-motion";
import useOnAnimation from "./useOnAnimation.footer";
import { Link } from "react-router-dom";
import EarthFooter from "../../assets/EarthFooter.mp4";
import "./Footer.scss";
const Footer = () => {
  const fadeInControl = useAnimation();
  const [footerRef, setFooterRef] = useState();
  useOnAnimation(footerRef, fadeInControl);
  const fadeInProps = {
    animate: fadeInControl,
    initial: { opacity: 0 },
  };
  return (
    <footer ref={setFooterRef} className="footer">
      <video autoPlay loop muted>
        <source src={EarthFooter} type="video/mp4" />
      </video>
      <motion.div {...fadeInProps} custom={0.1} className="footer__heading">
        <h1>
          When we plant trees,
          <br /> we plant the <span>seeds of peace and seeds of hope.</span>
        </h1>
      </motion.div>
      <motion.div className="footer__links">
        <motion.div className="footer__links-wrapper">
          <motion.div {...fadeInProps} custom={1.4} id="socials">
            <img src={images.logo} alt="logo" />
            <div>
              <img src={images.Facebook} alt="facebook" />
              <img src={images.Twitter} alt="facebook" />
              <img src={images.Instagram} alt="facebook" />
            </div>
          </motion.div>
          <motion.div {...fadeInProps} custom={2.1} id="articles-1">
            {[
              { title: "Deforestation", tag: "trending/2" },
              { title: "Climate Change", tag: "latest/4" },
              { title: "World Environment Day", tag: "trending/3" },
            ].map((data, index) => {
              return (
                <a
                  href={`/blog/articles/${data.tag}/${data.title
                    .replace(/[\s]/g, "-")
                    .toLowerCase()}`}
                  key={`article-set1-${index}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.title}
                </a>
              );
            })}
          </motion.div>
          <motion.div {...fadeInProps} custom={2.8} id="articles-2">
            {[
              {
                title: "Celebritree",
                link: "the-story-behind-celebritree",
                tag: "latest/1",
              },
              { title: "Our Mission", link: "our-mission", tag: "latest/2" },
              {
                title: "About AQI",
                link: "about-air-quality-index",
                tag: "latest/2",
              },
              {
                title: "Anti Smog Trees",
                link: "anti-smog-trees",
                tag: "trending/2",
              },
            ].map((data, index) => {
              return (
                <a
                  href={`/blog/articles/${data.tag}/${data.link}`}
                  key={`article-set2-${index}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.title}
                </a>
              );
            })}
          </motion.div>
          <motion.div {...fadeInProps} custom={3.5} id="newsletter">
            <NewsLetter />
          </motion.div>
        </motion.div>
        <motion.div custom={4.2} {...fadeInProps}>
          <h1>
            © {new Date().getFullYear()} <span>Celebritree</span> All rights
            reserved.
          </h1>
          <a href="/blog/credits" target="_blank" rel="noreferrer">
            Credits
          </a>
          <Link to="/contact">Contact</Link>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
