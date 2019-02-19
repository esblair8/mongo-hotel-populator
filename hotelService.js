const axios = require("axios");
const config = require("./config");

const instance = axios.create({
  baseURL: config.hotelsApiBaseUrl,
  timeout: 10000
});

instance.defaults.headers.common["Api-Key"] = config.apiKey;
instance.defaults.headers.common["Content-Type"] = "application/json";
instance.defaults.headers.common["Accept"] = "application/json";
instance.defaults.headers.common["Accept-encoding"] = "Gzip";

module.exports = instance;
