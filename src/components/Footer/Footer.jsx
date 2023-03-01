import React from "react";
import "./Footer.scss";
import images from "../../constants/images";
import CustomButton from "../UI/Button/CustomButton";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__heading">
        <h1>
          When we plant trees,
          <br /> we plant the <span>seeds of peace and seeds of hope.</span>
        </h1>
      </div>
      <div className="footer__links">
        <div className="footer__links-wrapper">
          <div id="socials">
            <img src={images.logo} alt="logo" />
            <div>
              <img src={images.Facebook} alt="facebook" />
              <img src={images.Twitter} alt="facebook" />
              <img src={images.Instagram} alt="facebook" />
            </div>
          </div>
          <div id="articles-1">
            <a href="">Deforestation</a>
            <a href="">Climate Change</a>
            <a href="">World Environment Day</a>
          </div>
          <div id="articles-2">
            <a href="">Celebritree</a>
            <a href="">Our Mission</a>
            <a href="">About AQI</a>
            <a href="">Anti Smog Trees</a>
          </div>
          <div id="newsletter">
            <input type="text" placeholder="Enter your email" required></input>
            <CustomButton
              backgroundColor="var(--white-color)"
              textColor="var(--black-color)"
            >
              Subscribe
            </CustomButton>
          </div>
        </div>
        <div>
          <h1>
            © {new Date().getFullYear()} <span>Celebritree</span> All rights
            reserved.
          </h1>
          <a>Privacy Policy</a>
          <a>Terms and usage</a>
          <a>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
