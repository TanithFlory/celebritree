import React from "react";
import "./About.scss";
import images from "../../constants/images";

const About = () => {
  return (
    <>
      <div className="about">
        <div>
          <h1>About Us</h1>
        </div>
        <div>
          <div className="about__socials">
            <img src={images.logo} alt="logo" />
            <div>
              <div>
                {" "}
                {[images.Facebook, images.Instagram, images.Twitter].map(
                  (icon) => {
                    return <img src={icon} alt="SocialIcon" key={icon} />;
                  }
                )}
              </div>
              <div>
                <img src={images.Arrow} alt="arrow"></img>
                <h2>
                  Follow for updates! <div></div>
                </h2>
              </div>
            </div>
          </div>
          <div className="about__content">
            <h1>
              Welcome to Celebritree, a non-profit organization dedicated to
              fighting both global starvation and climate change.
            </h1>
            <div>
              <ul>
                <div>
                  <img src={images.EarthRotate} alt="Earth" />
                  <li>
                    We believe that everyone deserves access to healthy and
                    sustainable food, regardless of their economic
                    circumstances.
                  </li>
                </div>
                <div>
                  <img src={images.EarthRotate} alt="Earth" />
                  <li>
                  We also recognize the urgent need to address climate change
                  and its devastating effects on our planet.
                  </li>
                </div>
                <div>
                  <img src={images.EarthRotate} alt="Earth" />
                  <li>
                  We believe that everyone has a role to play in creating a
                  better world, and we invite you to join us in our mission.
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
