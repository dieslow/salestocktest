var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var itemSchema = new Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	stock: Number,
	price: Number,
	location: {
		loc_num: Number,
		rack: String
	},
	category: {
		type_cat: Number,
		desc_cat: String
	},
	status_aktif: Boolean,
	created_at: Date,
	updated_at: Date
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;