import React from "react";
import CustomButton from "../UI/Button/CustomButton";
import images from "../../constants/images";
import { motion } from "framer-motion";
import "./Header.scss";
const Header = () => {
  const scrollHandler = () => {
    const cardWrapper = document.getElementById("card-wrapper");
    if (cardWrapper) {
      cardWrapper.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="header"
        >
          <div className="header__content">
            <div className="header__content-main">
              <h2>Making world a</h2>
              <h1>Better place to Live!</h1>
              <p>
                "We believe in creating a better world by addressing two
                pressing global issues: starvation and climate change."
              </p>
              <div>
                <CustomButton
                  textColor="var(--white-color)"
                  backgroundColor="var(--green-color)"
                >
                  About
                </CustomButton>
                <CustomButton
                  textColor="var(--white-color)"
                  backgroundColor="var(--green-color)"
                >
                  Join Us
                </CustomButton>
              </div>
            </div>
          </div>
          <img
            alt="contribute"
            src={images.contribute}
            className="header__main-button"
            onClick={scrollHandler}
          />
          <div className="header__svg">
            <img src={images.TreeReveal} alt="Tree" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
