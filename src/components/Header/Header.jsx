import React from "react";
import { PrimaryButton } from "../UI/Button/StyledButtons";
import { MotionWrapper } from "../UI/Wrapper/MotionWrappers";
import AirQualityIndex from "../AirQualityIndex/AirQualityIndex";
import images from "../../constants/images";
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
        <MotionWrapper className="header">
          <div className="header__content">
            <div className="header__content-main">
              <h2>Making world a</h2>
              <h1>Better place to Live!</h1>
              <p>
                "We believe in creating a better world by addressing two
                pressing global issues: starvation and climate change."
              </p>
              <div>
                <PrimaryButton
                  textColor="var(--white-color)"
                  backgroundColor="var(--green-color)"
                >
                  About
                </PrimaryButton>
                <PrimaryButton
                  textColor="var(--white-color)"
                  backgroundColor="var(--green-color)"
                >
                  Join Us
                </PrimaryButton>
              </div>
              <AirQualityIndex />
            </div>
          </div>
          <img
            alt="contribute"
            src={images.contribute}
            className="header__main-button"
            onClick={scrollHandler}
          />
          <div className="header__svg">
            <img src={images.TreeReveal} alt="" />
          </div>
        </MotionWrapper>
      </div>
    </>
  );
};

export default Header;
