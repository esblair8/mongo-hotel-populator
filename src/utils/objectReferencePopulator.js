const mapDestinationToCountryData = async (data, Schema, refCode) => {

  const itemPromises = data.map(async item => {
    try {
      const reference = await Schema.findOne({ code: item[refCode] })
      item[refCode] = reference
      return item
    } catch (e) {
      console.log(e)
    }
  })
  console.log(refCode, 'mapped')
  return Promise.all(itemPromises)
}

module.exports = mapDestinationToCountryData