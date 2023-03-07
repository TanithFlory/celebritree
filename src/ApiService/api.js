import axios from "axios";

const getLocation = (lat, lng) => {
  const apiKey = process.env.REACT_APP_GEO_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;
  return new Promise((resolve, reject) => {
    resolve(
      axios.get(url).then((response) => {
        return [
          response.data.results[5].formatted_address,
          response.data.results[0].address_components[5].short_name,
          response.data.results[0].address_components[1].long_name,
        ];
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
          reject("Unable to retrieve AQI data");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const subscribe = (emailID) => {
  const url = "https://connect.mailerlite.com/api/subscribers";
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
  //for aqi
  getLocation,
  getAqi,

  //for newsletter
  subscribe,
};

export default api;
