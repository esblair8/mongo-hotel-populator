const mongoose = require('mongoose');

const Currency = mongoose.model('Currency', {
    currencies: {
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
        },
        currencyType: {
            type: 'String'
        }
    }
})

module.exports = Currency;