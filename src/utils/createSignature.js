const sha256 = require("js-sha256");

const key = process.env.API_KEY
const secret = process.env.SECRET

module.exports = function() {
  let hash = sha256.create();
  hash.update(
    key.concat(secret).concat(Math.floor(Date.now() / 1000))
  );
  return hash.hex();
};
