var axios = require('axios');
var site = "http://api.wunderground.com/api/cc9f69992ffae3d7/geolookup/conditions/q/CA/San_Francisco.json";


var handleIncomingWeatherData = function(response) {
	console.log(response);
	}

axios.get(site).then(handleIncomingWeatherData);