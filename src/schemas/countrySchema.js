const mongoose = require('mongoose');

const Country = mongoose.model('Country', {
    code: {
        type: 'String'
    },
    isoCode: {
        type: 'String'
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

module.exports = Country;