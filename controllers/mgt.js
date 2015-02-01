//var Location = require('../models/location');

exports.saveLocation = function(req,res){
	console.log('Saving Location');

	// var location = new Location({Lat:req.params.lat, Loc: req.params.loc});

	// location.save(function(err){
	// 	if(err)
	// 	{
	// 		console.log('error saving : %s', err);
	// 	}
	// 	else
	// 	{
	// 		res.redirect('/');
	// 	}
	// });
};

exports.getLocation = function(req,res){
	// Location.find({},function(err,locs){
	// 	if(!err)
	// 	{
	// 		res.send(locs);
	// 	}
	// });
	res.render('index', { title: 'KALYAN SIRSINGANDLA' });
};