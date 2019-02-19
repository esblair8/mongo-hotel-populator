const mongoose = require("mongoose");
const hotelService = require("./hotelService");
const Hotel = require("./hotelSchema");
const createSignature = require("./createSignature");

var util = require("util");

mongoose.Promise = global.Promise;

const connection = "";

const params = {
  fields: "all",
  language: "ENG",
  from: 1,
  to: 5
};

mongoose
  .connect(connection, { useNewUrlParser: true })
  .then(() => {
    hotelService.defaults.headers["X-Signature"] = createSignature();

    hotelService
      .get("/hotels", params)
      .then(results => {
        console.log("results", results);
        results.data.hotels.forEach(hotel => {
          console.log("hotel", hotel);
          new Hotel(hotel).save().then(console.log("===== saved ====="));
        });
        console.log("DONE!");
      })
      .catch(error => console.log("x", error));
  })
  .catch(error => console.log("y", error));
