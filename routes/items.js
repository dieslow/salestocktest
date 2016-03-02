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

//find by description like
router.get('/description/:description', function(req, res, next) {
	Item.find({ description : { $regex :req.params.description} }, function(err, item) {
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
