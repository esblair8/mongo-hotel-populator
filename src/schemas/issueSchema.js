const mongoose = require('mongoose');

const Issue = mongoose.model('Issue', {
    type: {
        type: 'String'
    },
    code: {
        type: 'String'
    },
    alternative: {
        type: 'Boolean'
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

module.exports = Issue;