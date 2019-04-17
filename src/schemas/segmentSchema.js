const mongoose = require('mongoose');

const Segment = mongoose.model('Segment', {
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

module.exports = Segment;