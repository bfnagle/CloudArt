var axios = require('axios');
const lightDriver = require('./weatherLightPatterns.js');
var site = "http://api.wunderground.com/api/cc9f69992ffae3d7/geolookup/conditions/q/CA/San_Francisco.json";

setInterval(() => lightDriver.coldest(20), 100);


var handleIncomingWeatherData = function(response)
{
	console.log(response);
}

axios.get(site).then(handleIncomingWeatherData);
