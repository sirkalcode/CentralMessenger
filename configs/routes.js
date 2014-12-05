var express = require('express');

var route = express();

var bodyParser = require('body-parser');
var cont = require('../controllers/mgt');

route.use(bodyParser.json());
route.use(bodyParser.urlencoded());

route.post('/send', cont.saveLocation);

route.get('/', cont.getLocation);


module.exports = route;