const mongoose = require('mongoose');

const Facility = mongoose.model('Facility', {
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
    description: {
        languageCode: {
            type: 'String'
        },
        content: {
            type: 'String'
        }
    }
})

module.exports = Facility;