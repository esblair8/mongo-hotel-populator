const mongoose = require('mongoose');
const _ = require('lodash');
const connectToDatabase = require('../helpers/db');
const createSignature = require('../helpers/createSignature');
const hotelService = require('../services/hotel.service');

mongoose.Promise = global.Promise;

const populateItems = async (from, to, endPoint, Schema) => {
  // const from = 1
  // const to = 2000
  const queryString = `/${endPoint.toLowerCase()}?fields=all&language=ENG&from=${from}&to=${to}`;
  console.log('queryString', queryString);

  connectToDatabase()
    .then(() => {
      hotelService.defaults.headers['X-Signature'] = createSignature();
      hotelService
        .get(queryString)
        .then(results => {
          // console.log(results)
          results.data[endPoint.split('/')[1]].forEach(item => {

            console.log('==== item =====');
            console.log('name', item.name, 'id', item.code, 'country', item.countryCode, 'destination', item.destinationCode);
            new Schema(item).save().then(console.log('===== saved ====='));
          });
          console.log('DONE!');
          return
        })
        .catch(error => console.log('error from results', error));
    })
    .catch(error => console.log('error connecting to mongo', error));
}

const start = async (start, finish, endPoint, Schema) => {
  _.range(start, finish, 1000).forEach(async listItem => {
    await populateItems(listItem, listItem + 999, endPoint, Schema)
  });
}

module.exports = start