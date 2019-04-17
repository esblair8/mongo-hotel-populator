const mongoose = require('mongoose')
const _ = require('lodash')

const connectToDatabase = require('../utils/db')
const createSignature = require('../utils/createSignature')
const mapHotelToRefData = require('../utils/objectReferencePopulator')
const arrayRefMapper = require('../utils/arrayReferencePopulator')

const hotelService = require('../services/hotelService')
const Schemas = require('../schemas')

mongoose.Promise = global.Promise

const start = async (start, finish) => {
  _.range(start, finish, 1000).forEach(async listItem => {
    try {
      const populatedHotels = await getPopulatedHotels(listItem, listItem + 999)
      const insertedHotels = await Schemas.hotel.insertMany(populatedHotels)
      Promise.all(insertedHotels).then(endProcess())
    } catch (e) {
      console.log(e)
    }
  })
}

const getPopulatedHotels = async (from, to) => {
  const queryString = getQueryString(from, to)
  await connectToDatabase()
  setSignatureHeader()
  try {
    const hotels = await getHotelData(queryString)
    const countryMapped = await mapHotelToRefData(hotels, Schemas.country, 'countryCode')
    // const accomodationTypeMapped = await mapHotelToRefData(countryMapped, Schemas.accommodation, 'accommodationTypeCode')
    const destinationMapped = await mapHotelToRefData(countryMapped, Schemas.destination, 'destinationCode')
    const categoryMapped = await mapHotelToRefData(destinationMapped, Schemas.category, 'categoryCode')
    const chainMapped = await mapHotelToRefData(categoryMapped, Schemas.chain, 'chainCode')

    const segmentMapped = await arrayRefMapper(chainMapped, Schemas.segment, 'segmentCodes')
    const boardMapped =  arrayRefMapper(segmentMapped, Schemas.board, 'boardCodes')

    return boardMapped
  } catch (e) {
    console.log(e)
  }
}

//TODO MOVE TO UTILS - getHotelsQueryString
const getQueryString = (from, to) => `hotels?fields=all&language=ENG&from=${from}&to=${to}`

//TODO MOVE TO UTILS
const setSignatureHeader = () => hotelService.defaults.headers['X-Signature'] = createSignature()

const getHotelData = async (queryString) => {
  try {
    const hotelData = await hotelService.get(queryString)
    return hotelData.data['hotels']
  } catch (e) {
    console.log(e)
  }
}

//TODO MOVE TO UTILS
const endProcess = () => {
  console.log('done')
  process.kill(process.pid, 'SIGTERM')
}

const from = process.argv[2]
const to = process.argv[3]
start(from, to)