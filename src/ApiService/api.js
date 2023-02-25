import axios from "axios";
// const apiKey = "AIzaSyA0GwEcj5h-9Oi4euNqyuXPk9I_31f0xJg";
const apiKey=null;
const getLocation = (lat, lng) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;
  return new Promise((resolve, reject) => {
    resolve(
      axios.get(url).then((response) => {
        return [
          response.data.results[5].formatted_address,
          response.data.results[0].address_components[5].short_name,
        ];
      })
    );
  });
};

const getAqi = (city) => {
  const apiKey = "f6d57fd7920e9d83335679ce0afbb1f5edc1256f";
  const url = `https://api.waqi.info/feed/${city}/?token=${apiKey}`;
  console.log(url);
  return new Promise((resolve, reject) => {
    resolve(axios.get(url).then((response) => response.data.data.aqi));
  });
};

const api = {
  getLocation,
  getAqi
};

export default api;
