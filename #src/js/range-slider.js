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