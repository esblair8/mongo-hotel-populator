const mongoose = require("mongoose");

const Hotel = mongoose.model("Hotel", {
  code: {
    type: "Number"
  },
  name: {
    languageCode: {
      type: "String"
    },
    content: {
      type: "String"
    }
  },
  accommodationTypeCode: {
    type: "String"
  },
  countryCode: {
    type: "String"
  },
  destinationCode: {
    type: "String"
  },
  zoneCode: {
    type: "String"
  },
  coordinates: {
    longitude: {
      type: "Number"
    },
    latitude: {
      type: "Number"
    }
  },
  categoryCode: {
    type: "String"
  },
  chainCode: {
    type: "String"
  },
  description: {
    languageCode: {
      type: "String"
    },
    content: {
      type: "String"
    }
  },
  address: {
    languageCode: {
      type: "String"
    },
    content: {
      type: "String"
    }
  },
  postalCode: {
    type: "String"
  },
  city: {
    languageCode: {
      type: "String"
    },
    content: {
      type: "String"
    }
  },
  email: {
    type: "String"
  },
  web: {
    type: "String"
  },
  giataCode: {
    type: "String"
  },
  license: {
    type: "String"
  },
  phones: {
    type: ["Mixed"]
  },
  issues: {
    type: ["Mixed"]
  },
  terminals: {
    type: ["Mixed"]
  },
  facilities: {
    type: ["Mixed"]
  },
  boardCodes: {
    type: ["String"]
  },
  segmentCodes: {
    type: ["String"]
  },
  interestPoints: {
    type: ["Mixed"]
  },
  rooms: {
    type: ["Mixed"]
  },
  wildcards: {
    type: ["Mixed"]
  },
  images: {
    type: ["Mixed"]
  }
});

module.exports = Hotel;
