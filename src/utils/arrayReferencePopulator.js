const mapSubArrayData = async (data, Schema, refCode) => {

  const itemPromises = data.map(async item => {

    const refArray = item[refCode]

    if (refArray) {
      console.log(refArray)
      const dataArrayPromises = refArray.map(async refItem => {
        console.log('refItem', refItem)
        try {
          const reference = await Schema.findOne({ code: refItem })
          return reference
        } catch (e) {
          console.log(e)
        }
      })

      item[refCode] = await Promise.all(dataArrayPromises)
      return item
    } else {
      return item
    }
  })
  console.log(refCode, 'mapped')
  return Promise.all(itemPromises)
}

module.exports = mapSubArrayData