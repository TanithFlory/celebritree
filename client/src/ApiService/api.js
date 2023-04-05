import axios from "axios";

const getLocation = (lat, lon) => {
  const apiKey = process.env.REACT_APP_GEO_API;
  const url = `${process.env.REACT_APP_GEO_BASE_URL}${lat},${lon}.json?key=${apiKey}&radius=100`;
  return new Promise((resolve, reject) => {
    resolve(
      axios.get(url).then((response) => {
        const { countrySubdivision, municipality, countryCode } =
          response.data.addresses[0].address;
        return [countrySubdivision, municipality.split(" ")[0], countryCode];
      })
    );
  });
};

const getAqi = (city) => {
  const apiKey = process.env.REACT_APP_AQI_API;
  const url = `https://api.waqi.info/feed/${city}/?token=${apiKey}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        if (response.data.data.aqi) {
          resolve(response.data.data.aqi);
        } else {
          reject("Unable to retrieve AQI data (Location disabled)");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const subscribe = (emailID) => {
  const url = process.env.REACT_APP_NEWSLETTER_BASE_URL;
  const apiKey = process.env.REACT_APP_NEWSLETTER_API;
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
  return new Promise((resolve, reject) => {
    resolve(
      axios.post(
        url,
        { email: emailID, status: "active" },
        {
          headers: headers,
        }
      )
    );
  });
};

const api = {
  getLocation,
  getAqi,
  subscribe,
};

export default api;
