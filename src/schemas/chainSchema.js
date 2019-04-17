const mongoose = require('mongoose');

const Chain = mongoose.model('Chain', {
    code: {
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

module.exports = Chain;