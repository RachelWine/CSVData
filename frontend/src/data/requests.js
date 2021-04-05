const axios = require("axios");
export const APIURL = "http://localhost:5000";

export const uploadCsvToDb = data =>
  axios({
    method: "post",
    url: `${APIURL}/upload`,
    data,
    config: { headers: { "Content-Type": "multipart/form-data" } }
  });

export const getAllCountrysFromDb = () => axios.get(`${APIURL}/options`);

export const getDataOfCountry = (country) => axios.get(`${APIURL}/browse/${country}`);