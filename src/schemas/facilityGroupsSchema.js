const mongoose = require('mongoose');

const FacilityGroup = mongoose.model('FacilityGroup', {
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

module.exports = FacilityGroup;