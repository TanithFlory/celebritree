import { useState } from "react";
import "./About.scss";
import Socials from "./Socials/Socials";
import AboutContent from "./AboutContent";
import { motion, useAnimation } from "framer-motion";
import useOnAnimation from "./useOnAnimation.about";
const About = () => {
  const [socialsRef, setSocialsRef] = useState();
  const [contentRef, setContentRef] = useState();

  const socialControls = useAnimation();
  const contentControls = useAnimation();

  useOnAnimation(socialsRef, socialControls, contentRef, contentControls);
  return (
    <>
      <div className="about">
        <div>
          <motion.h1 animate={socialControls} initial={{ opacity: 0 }}>
            About <span>Celebritree</span>
          </motion.h1>
        </div>
        <div>
          <Socials
            socialsRef={setSocialsRef}
            initial={{ opacity: 0 }}
            animate={socialControls}
            text="Follow for updates!"
          />
          <motion.div
            ref={setContentRef}
            animate={contentControls}
            initial={{ opacity: 0 }}
            className="about__content"
          >
            <h1>
              Welcome to <span>Celebritree</span>, a non-profit organization
              dedicated to fighting both global starvation and climate change.
            </h1>
            <div>
              <ul>
                <AboutContent />
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
