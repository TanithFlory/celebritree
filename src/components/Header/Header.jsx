import React, { useEffect, useState } from "react";
import CustomButton from "../UI/Button/CustomButton";
import fetchLocation from "./fetchLocation";
import api from "../../ApiService/api";
import images from "../../constants/images";
import { motion } from "framer-motion";
import { ImLocation2 } from "react-icons/im";
import { FaBiohazard } from "react-icons/fa";
import "./Header.scss";
const Header = () => {
  const [userLocation, setUserLocation] = useState({
    location: "",
    flag: false,
    aqi: "",
    city: "",
  });
  useEffect(() => {
    fetchLocation().then((res) => {
      setUserLocation({
        location: res[0],
        flag: res[1].toString().toLowerCase(),
        city: res[2],
      });
    });

    (async () => {
      const city = await fetchLocation().then((res) => res[2]);
      api.getAqi(city).then((res) => {
        setUserLocation((prevState) => ({
          ...prevState,
          aqi: res,
        }));
      });
    })();
  }, []);

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
              <div className="header__air-insights">
                <div className="header__location">
                  <ImLocation2 />
                  {userLocation.flag && (
                    <img
                      src={`https://flagcdn.com/${userLocation.flag}.svg`}
                      alt="flag"
                    />
                  )}
                  <h3>
                    {userLocation.location === ""
                      ? "Location permission required "
                      : userLocation.location}
                  </h3>
                </div>
                <div className="header__aqi">
                  <FaBiohazard
                    style={{
                      fill:
                        userLocation.aqi < 51
                          ? "var(--green-color)"
                          : userLocation.aqi < 101
                          ? "var(--aqi-orange-moderate)"
                          : userLocation.aqi < 151
                          ? "var(--aqi-orange-severe)"
                          : userLocation.aqi < 201
                          ? "var(--aqi-red)"
                          : userLocation.aqi < 301
                          ? "var(--aqi-purple)"
                          : "var(--aqi-hazardous)",
                    }}
                  />
                  <h3>
                    Air Quality Index :{" "}
                    {userLocation.aqi === ""
                      ? " Cannot determine"
                      : userLocation.aqi}
                  </h3>
                </div>
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
            <img src={images.TreeReveal} alt="" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
