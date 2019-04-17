const mongoose = require('mongoose');
const _ = require('lodash');

const connectToDatabase = require('../helpers/db');
const createSignature = require('../helpers/createSignature');
const mapDestinationToCountryData = require('../helpers/referencePopulator')
const hotelService = require('../services/hotelService');

const Destination = require('../schemas').destination;
const Country = require('../schemas').country;

mongoose.Promise = global.Promise;

const start = async (start, finish) => {
  _.range(start, finish, 1000).forEach(async listItem => {
    const populatedDestinations = await getPopulatedDestinations(listItem, listItem + 999)
    const insertedDestinations = await Destination.insertMany(populatedDestinations)
    Promise.all(insertedDestinations).then(endProcess())
  });
}

const getPopulatedDestinations = async (from, to) => {
  const queryString = getQueryString(from, to)
  await connectToDatabase()
  setSignatureHeader()
  const destinations = await getDestinationData(queryString)
  return mapDestinationToCountryData(destinations, Country, 'countryCode')
}

const getQueryString = (from, to) => `locations/destinations?fields=all&language=ENG&from=${from}&to=${to}`;

const setSignatureHeader = () => hotelService.defaults.headers['X-Signature'] = createSignature();

const getDestinationData = async (queryString) => {
  const destinationData = await hotelService.get(queryString)
  return destinationData.data['destinations']
}


const endProcess = () => {
  console.log('done')
  process.kill(process.pid, 'SIGTERM')
}

const from = process.argv[2]
const to = process.argv[3]
start(from, to)