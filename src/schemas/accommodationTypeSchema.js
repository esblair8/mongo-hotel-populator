const mongoose = require('mongoose');

const AccommodationType = mongoose.model('AccommodationType', {
    code: {
        type: 'String'
    },
    typeDescription: {
        type: 'String'
    },
    typeMultiDescription: {
        languageCode: {
            type: 'String'
        },
        content: {
            type: 'String'
        }
    }
})

module.exports = AccommodationType;