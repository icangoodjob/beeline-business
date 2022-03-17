/*===== SHOW SIDEBAR  =====*/ 
$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		$(this).toggleClass('active');
		$('#sidebar').toggleClass('active');
		$('#wrapper').toggleClass('active');
		$('#header').toggleClass('active');
	});
});

/*===== Показать другие отчеты ====*/
const btnMore = document.getElementById('btn-more');
const graphElements = document.querySelectorAll('.graph__item').length;
const graphElementsHidden = document.querySelectorAll('.graph__item:nth-child(n+4)');
if (btnMore != null) {
	btnMore.addEventListener('click', () => {
		for (let element of graphElementsHidden){
			element.classList.toggle('active');
			btnMore.classList.toggle('active');
		}
	})
	function hideBtn() {
		if (graphElements > 3) {
			btnMore.style.display = 'flex';
		} else {
			btnMore.style.display = 'none';
		}
	}
	hideBtn();
}

// Календари
$('#datepickerOne').each(function() {
	$(this).datepicker({
		format: "dd/mm/yyyy",
		weekends: [6,0],
		inline: false,
		autoclose: true,
		position: 'bottom left',
	});
});
$('#datepickerTwo').each(function() {
	$(this).datepicker({
		format: "dd/mm/yyyy",
		weekends: [6,0],
		inline: false,
		autoclose: true,
		position: 'bottom left',
	});
});
$('.datepicker--cells').click(function(){
	$('.datepicker').removeClass('active');
});

/*================== TOGGLE CHOICE (+ / -) ====================*/
const toggleChoice = document.querySelectorAll('.toggle__choice');
for (let i = 0; i < toggleChoice.length; i++) {
	toggleChoice[i].addEventListener('click', (event) => {
		event.target.classList.toggle('active');
	})
}

/*================== Dropdown menu settings ====================*/
$('#settings-btn').on('click', function (e){
	$('.dropmenu').toggleClass('show');
});
$(document).mouseup(function (e){
	var dropmenuContainer = $('.dropmenu'); 
	if (!dropmenuContainer.is(e.target) && dropmenuContainer.has(e.target).length === 0) {
		dropmenuContainer.removeClass('show'); 
	}
});
/*================== Dropdown menu settings ====================*/


/*================== Offcanvas load files====================*/
const filesItem = document.querySelectorAll('.load-file__item').length;
const uploadBtn = document.getElementById('upload-btn');
if (filesItem) {
	if (filesItem > 0) {
		uploadBtn.removeAttribute('disabled');
	} else {
		uploadBtn.setAttribute('disabled');
	}
}
/*================== Offcanvas load files====================*/



/*================== RANGE-SLIDER ====================*/
let rangeSliderTonality = document.getElementById('range-tonality');
if (rangeSliderTonality){
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
if (rangeSliderSpeed){
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
if (rangeSliderSpeed){
	noUiSlider.create(rangeSliderVolume, {
		start: 41,
		connect: 'lower',
		range: {
			'min': 0,
			'max': 100
		}
	});
}