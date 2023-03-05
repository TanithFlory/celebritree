import axios from "axios";
const getLocation = (lat, lng) => {
  const apiKey = null;
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
  const apiKey = "f6d57fd7920e9d83335679ce0afbb1f5edc1256f";
  const url = `https://api.waqi.info/feed/${city}/?token=${apiKey}`;
  return new Promise((resolve, reject) => {
    resolve(axios.get(url).then((response) => response.data.data.aqi));
  });
};

const subscribe = (emailID) => {
  const url = "https://connect.mailerlite.com/api/subscribers";
  const apiKey =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNmQ3NjRmMDUwMzM4MDk1NDVlMmYxMmEyM2U3OWE5MGQ0M2QxYTFjMzJmOTA2NmEzMDcxY2UxM2I3MmVmMGRiN2I0ZDM3MjA1ZDk5ZGQzNTEiLCJpYXQiOjE2Nzc5MTUzNjYuMTk2NzEsIm5iZiI6MTY3NzkxNTM2Ni4xOTY3MTIsImV4cCI6NDgzMzU4ODk2Ni4xOTIwMTYsInN1YiI6IjM3ODkxMiIsInNjb3BlcyI6W119.DtZtlteEib9cGjp4ZhQCghslPGeAC2HT8sclRpGl7YpyRU1xFm9xCOacFAoyzfnQM6cc4HMoEBkeD5tBlxNkaHbURPAh27pV7hlL516CGeMFQzTQmJtGeay73TVc3K7GLryeSKibIxid4Be1M_080WF--CrTO2lPbsE7z5XIB4Jhc-RuBiopd9SM6U4Cu4OHPuzBek1KOsVdRxxcplDp25Ny4KjtWHe3hGFhMkCf02ZZBN0aoG8JUMhmrModgO6m01ch8bYMLnwHw8sWMaEgW4FmTp1Aw82RX1QPyGL2PCIGiy7YwCOZ9UnWiEPEjiTwhBlBCifXkIXgZrNKcgRa3q1A7-Obc_J3gyP6CgWCp4bRKpeoRaFzzIajSyBm5Q89Ky8Ry-mytQ-M7NxRqgL0-kMbWlzAVcXZrI0VnQjVnLoyresJDD7lC2WX3Er-RIyy08DZp476_qyNPIADxPdJZz3d0Y5x3DH7FMInYC8pEsqO6hKOgu5R3U_NppeXaBhfPPrWSs6X7XxIt3SwMiWzT1rqfFidHTT0j7Qc3hYjEPnFKfNSzmJatINPHM1UpD1xTPcMWKE4TsgisNAewBx_fW2u0ojDgBDJRqfkNMXQEBFrLdTjuBrJ4uzdcAQWml4iOenuf1ZPpg_8SVBPDytF_CaAg4FnqBqUjdvXp4hj3sk";
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
