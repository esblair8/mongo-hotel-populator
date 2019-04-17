const mongoose = require('mongoose');

const Promotion = mongoose.model('Promotion', {
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

module.exports = Promotion;