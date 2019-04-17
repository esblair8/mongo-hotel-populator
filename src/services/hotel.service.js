const axios = require("axios");

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000
});

instance.defaults.headers.common["Api-Key"] = process.env.API_KEY;
instance.defaults.headers.common["Content-Type"] = "application/json";
instance.defaults.headers.common["Accept"] = "application/json";
instance.defaults.headers.common["Accept-encoding"] = "Gzip";

module.exports = instance;
