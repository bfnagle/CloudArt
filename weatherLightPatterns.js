const lights = require('offgrid-lights');

const NUM_LIGHTS = 18;

const WeatherLightPatterns = {
	rain: function() {
	  forLoop((index) => lights.write(index, 0, 0, Math.random() * 155).send());
	},
	hotSunny: function() {
	  forLoop((index) => lights.write(index, 255, 127, 0).send());
	},
	tempDependent: function(tempData) {
		forLoop((index) => lights.write(index, tempData * 2, tempData, tempData / 4).send());
	},
	coldest: lessThan20s,
};

function lessThan20s(temp) {
	firstColor = [0, 99, 229];
	secondColor = [205, 254, 246];
	if (temp < 0) {
		temp = 0;
	}
	p = (temp/20);
    forLoop((index) => {
		return lights.write(
			index, 
			(firstColor[0]*p + secondColor[0]*(1-p)) / 2,
			(firstColor[1]*p + secondColor[1]*(1-p)) / 2, 
			(firstColor[2]*p + secondColor[2]*(1-p)) / 2).send()
		}
	);
}

const forLoop = function(body) {
	for (let i=0; i < NUM_LIGHTS; i++) {
		body(i);
	}
}

module.exports = WeatherLightPatterns;
