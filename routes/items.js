var express = require('express'),
	router	= express.Router(),
	Item	= require('../models/modelItem');

router.get('/', function(req, res, next) {
	Item.find({}, function(err, items) {
		if (err ) {
			res.send( err );
		}else{
			res.send(items);
		};
	});
});

router.get('/create/', function(req, res, next) {
	var newItem = Item({
		"name"		: 'tees06',
		"description"	: 'baju 06',
		"stock"	: 20,	
		"price"		: 75000,
		"location": {
			"loc_num": 1,
			"rack": "1-01"
		},
		"category": {
			"type_cat": 1,
			"desc_cat": 'music'
		},
		"status_aktif" : true,
		"created_at": '2016-03-01T22:07:15.178Z',
		"updated_at": '2016-03-01T22:07:15.178Z'
	});
	
	newItem.save(function(err) {
		if (err ) {
			res.send( err );
		}else{
			res.send({success:true});
		};
	});
});

//find by name
router.get('/:name', function(req, res, next) {
	Item.findOne({ name : req.params.name}, function(err, item) {
		if (err ) {
			res.send( err );
		}else{
			res.send(item);
		};
	});
});

//find by stock
router.get('/stock/:stock', function(req, res, next) {
	Item.find({ stock : req.params.stock}, function(err, item) {
		if (err ) {
			res.send( err );
		}else{
			res.send(item);
		};
	});
});

//find by id category
router.get('/category/:type_cat', function(req, res, next) {
	Item.find({ 'category.type_cat' : req.params.type_cat}, function(err, item) {
		if (err ) {
			res.send( err );
		}else{
			res.send(item);
		};
	});
});


module.exports = router;
