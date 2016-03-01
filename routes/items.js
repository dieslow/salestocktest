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

module.exports = router;
