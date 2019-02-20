const mongoose = require("mongoose");
const hotelService = require("./hotelService");
const Hotel = require("./hotelSchema");
const createSignature = require("./createSignature");

mongoose.Promise = global.Promise;

const connection = ""
const from = 4001
const to = 5000
const queryString = `/hotels?fields=all&language=ENG&from=${from}&to=${to}`;
console.log("queryString", queryString);

mongoose
  .connect(connection, { useNewUrlParser: true })
  .then(() => {
    hotelService.defaults.headers["X-Signature"] = createSignature();
    hotelService
      .get(queryString)
      .then(results => {
        results.data.hotels.forEach(hotel => {
          console.log("==== hotel =====");
          // console.log(JSON.stringify(hotel));
          console.log("name", hotel.name, "id", hotel.code);
          new Hotel(hotel).save().then(console.log("===== saved ====="));
        });
        console.log("DONE!");
      })
      .catch(error => console.log("x", error));
  })
  .catch(error => console.log("y", error));
