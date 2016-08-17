var express = require('express');
	router 	= express.Router(),
	//models 	= require('../models');

	router.get('/', function(req, res, next){
		res.send("I tried to call a thousand times");
	});


	module.exports = router;