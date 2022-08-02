/*RANGE-SLIDER*/

let rangeSliderTonality = document.getElementById('range-tonality');
if (rangeSliderTonality) {
	noUiSlider.create(rangeSliderTonality, {
		start: 41,
		connect: 'lower',
		range: {
			'min': 0,
			'max': 100
		}
	});
}
let rangeSliderSpeed = document.getElementById('range-speed');
if (rangeSliderSpeed) {
	noUiSlider.create(rangeSliderSpeed, {
		start: 41,
		connect: 'lower',
		range: {
			'min': 0,
			'max': 100
		}
	});
}
let rangeSliderVolume = document.getElementById('range-volume');
if (rangeSliderVolume) {
	noUiSlider.create(rangeSliderVolume, {
		start: 41,
		connect: 'lower',
		range: {
			'min': 0,
			'max': 100
		}
	});
}

// WEIGHT SLIDER
const weightSliders = document.querySelectorAll('[data-range]');
console.log(weightSliders);
if (weightSliders) {
	weightSliders.forEach((item) => {
		let valuesForSlider = [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10];
		let format = {
			to: function (value) {
				return valuesForSlider[Math.round(value)];
			},
			from: function (value) {
				return valuesForSlider.indexOf(Number(value));
			}
		};
		noUiSlider.create(item, {
			start: [-2],
			// A linear range from 0 to 15 (16 values)
			range: { min: 0, max: valuesForSlider.length - 1 },
			// steps of 1
			step: 1,
			tooltips: true,
			format: format,
			pips: { mode: 'steps', format: format },
		});
		// The display values can be used to control the slider
		item.noUiSlider.set(['-2', '10']);
	})
}

