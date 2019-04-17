const mongoose = require('mongoose');

const Terminal = mongoose.model('Terminal', {
    country: {
        type: 'String'
    },
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
    type: {
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

module.exports = Terminal;