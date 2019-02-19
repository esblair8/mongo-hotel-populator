const config = require("./config");
const sha256 = require("js-sha256");

module.exports = function() {
  let hash = sha256.create();
  hash.update(
    config.apiKey.concat(config.secret).concat(Math.floor(Date.now() / 1000))
  );
  return hash.hex();
};
