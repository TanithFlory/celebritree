import React, { useState, useEffect } from "react";
import "./AirQualityIndex.scss";
import fetchLocation from "./fetchLocation";
import api from "../../ApiService/api";
import { ImLocation2 } from "react-icons/im";
import { FaBiohazard } from "react-icons/fa";

const AirQualityIndex = () => {
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

  return (
    <>
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
          <h3>
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
            Air Quality Index :{" "}
            {userLocation.aqi === "" ? " Cannot determine" : userLocation.aqi}
          </h3>
        </div>
      </div>
    </>
  );
};

export default AirQualityIndex;
