const mongoose = require('mongoose');

const Destination = mongoose.model('Destination', {
    code: {
        type: 'String'
    },
    name: {
        languageCode: {
            type: 'String'
        },
        content: {
            type: 'String'
        }
    },
    countryCode: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country'
    },
    isoCode: {
        type: 'String'
    },
    zones: {
        type: [
            'Mixed'
        ]
    },
    groupZones: {
        type: [
            'Mixed'
        ]
    }
})

module.exports = Destination;