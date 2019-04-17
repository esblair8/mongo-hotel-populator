const mongoose = require('mongoose');

const Board = mongoose.model('Board', {
	code: {
		type: 'String'
	},
	description: {
		content: {
			type: 'String'
		}
	},
	multiLingualCode: {
		type: 'String'
	}
})

module.exports = Board;