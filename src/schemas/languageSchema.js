const mongoose = require('mongoose');

const Language = mongoose.model('Language', {
    code: {
        type: 'String'
    },
    name: {
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

module.exports = Language;