import api from "../../ApiService/api";

const getUserLocation = () => {
  if (navigator.geolocation) {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  } else {
    return "AQI not supported on this browser.";
  }
};
const fetchLocation = async () => {
  const position = await getUserLocation();
  const lng = position.coords.longitude;
  const lat = position.coords.latitude;
  return api.getLocation(lat, lng);
};

export default fetchLocation;