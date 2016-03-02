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

//insert item
router.post('/', function(req, res, next) {
	var newItem = Item({
		name		: req.body.name,
		description	: req.body.description,
		stock	:  req.body.stock,	
		price		: req.body.price,
		"location.loc_num": req.body.type_cat,
		"location.rack": req.body.rack,
		"category.type_cat": req.body.type_cat,
		"category.desc_cat": req.body.desc_cat,
		status_aktif : req.body.status_aktif,
		created_at	: req.body.created_at,
		updated_at	: req.body.created_at
	});
	
	newItem.save(function(err) {
		if (err ) {
			res.send( err );
		}else{
			res.send({success:true});
		};
	});
});

//update item
router.put('/:name', function(req, res, next) {
	
	Item.findOneAndUpdate({ name : req.params.name}, { description : req.body.description, 
	stock : req.body.stock, price : req.body.price, "location.loc_num": req.body.type_cat, 
	"location.rack": req.body.rack, "category.type_cat": req.body.type_cat, "category.desc_cat": req.body.desc_cat,
	status_aktif : req.body.status_aktif, updated_at	: req.body.updated_at}, 
	function(err, item) {
		if (err ) {
			res.send( err );
		}else{
			res.send({success:true});
		};
	});
});

router.delete('/:name', function(req, res, next) {
	Item.findOneAndRemove({ name : req.params.name}, function(err, item) {
		if (err ) {
			res.send( err );
		}else{
			res.send({success:true});
		};
	});
});

module.exports = router;
