const mongoose = require('mongoose');

const Category = mongoose.model('Category', {
    code: {
        type: 'String'
    },
    simpleCode: {
        type: 'String'
    },
    accommodationType: {
        type: 'String'
    },
    group: {
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

module.exports = Category;