const mongoose = require('mongoose');

const Room = mongoose.model('Room', {
    code: {
        type: 'String'
    },
    type: {
        type: 'String'
    },
    characteristic: {
        type: 'String'
    },
    minPax: {
        type: 'Number'
    },
    maxPax: {
        type: 'Number'
    },
    maxAdults: {
        type: 'Number'
    },
    maxChildren: {
        type: 'Number'
    },
    minAdults: {
        type: 'Number'
    },
    description: {
        type: 'String'
    },
    typeDescription: {
        languageCode: {
            type: 'String'
        },
        content: {
            type: 'String'
        }
    },
    characteristicDescription: {
        languageCode: {
            type: 'String'
        },
        content: {
            type: 'String'
        }
    }
})

module.exports = Room;