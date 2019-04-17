const mongoose = require('mongoose');

const ImageType = mongoose.model('ImageType', {
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

module.exports = ImageType;