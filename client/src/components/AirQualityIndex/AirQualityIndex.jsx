import React, { useState, useEffect } from "react";
import "./AirQualityIndex.scss";
import fetchLocation from "./fetchLocation";
import api from "../../ApiService/api";
import { ImLocation2 } from "react-icons/im";
import { FaBiohazard } from "react-icons/fa";
import { useCallback } from "react";

const AirQualityIndex = () => {
  const [userLocation, setUserLocation] = useState({
    state: "",
    flag: false,
    aqi: "",
    city: "",
  });
  const getLocation = useCallback(async () => {
    try {
      if (document.cookie) {
        const data = document.cookie.replace(/"/g, "").slice(5).split(",");
        setUserLocation({
          state: data[0],
          flag: data[1],
          aqi: data[3],
          city: data[2],
        });
      } else {
        console.log("Cookie doesnt exists");
        const res = await fetchLocation();
        const city = res[1];
        const aqi = await api.getAqi(city);
        setUserLocation({
          state: res[0],
          flag: res[2],
          city,
          aqi,
        });
        const date = new Date();
        const data = JSON.stringify(`${res[0]},${res[2]},${city},${aqi}`);
        date.setTime(date.getTime() + 2 * 24 * 60 * 60 * 1000);
        document.cookie = `data=${data};expires=${date.toUTCString()}`;
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return (
    <>
      <div className="air__insights">
        <div>
          <ImLocation2 />
          {userLocation.flag && (
            <img
              src={`https://flagcdn.com/${userLocation.flag.toLowerCase()}.svg`}
              alt="flag"
            />
          )}
          <h3>
            {userLocation.state === ""
              ? "Location permission required "
              : `${userLocation.state}, ${userLocation.city}`}
          </h3>
        </div>
        <div>
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
            {userLocation.aqi === "" ? "Cannot determine" : userLocation.aqi}
          </h3>
        </div>
      </div>
    </>
  );
};

export default AirQualityIndex;
