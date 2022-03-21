/*===== SHOW SIDEBAR  =====*/ 
$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		$(this).toggleClass('active');
		$('#sidebar').toggleClass('active');
		$('#wrapper').toggleClass('active');
		$('#header').toggleClass('active');
		if (!$('#sidebar').hasClass('active')) {
			$('.aside .menu-dropdown').removeClass('show');
			$('.aside .menu__link').addClass('collapsed');
		}
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
// Сделаем неактивными воскресенье и субботу
var disabledDays = [0, 6];

$('#datepickerOne').each(function() {
	$(this).datepicker({
		navTitles: {
			days: 'MM yyyy'
		},
		format: "dd/mm/yyyy",
		weekends: [6,0],
		inline: false,
		autoclose: true,
		position: 'bottom left',
		onRenderCell: function (date, cellType) {
			if (cellType == 'day') {
				var day = date.getDay(),
				isDisabled = disabledDays.indexOf(day) != -1;
				return {
					disabled: isDisabled
				}
			}
		},
	});
});
$('#datepickerTwo').each(function() {
	$(this).datepicker({
		navTitles: {
			days: 'MM yyyy'
		},
		format: "dd/mm/yyyy",
		weekends: [6,0],
		inline: false,
		autoclose: true,
		position: 'bottom left',
		onRenderCell: function (date, cellType) {
			if (cellType == 'day') {
				var day = date.getDay(),
				isDisabled = disabledDays.indexOf(day) != -1;
				return {
					disabled: isDisabled
				}
			}
		},
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
let boxSettings = document.querySelector('.settings-box');
document.addEventListener('click', dropMenuOpen);
function dropMenuOpen(event) {
	if (boxSettings) {
		if (event.target.closest('.settings-btn')){
			boxSettings.classList.toggle('show');
			return false;
		}
		if (!event.target.closest('.settings-box')) {
			boxSettings.classList.remove('show');
		}
	}
}
/*================== Dropdown menu settings ====================*/

/*================== all btn ====================*/
$('.all-btn').on('click', function(event) {
	event.preventDefault();
	$('.choice-search').removeClass('show');
	$(this).parent('.choice-search').toggleClass('show');
})
$(document).mouseup(function (e){
	let searchContainer = $('.choice-search'); 
	if (!searchContainer.is(e.target) && searchContainer.has(e.target).length === 0) {
		searchContainer.removeClass('show'); 
	}
});
/*================== all btn ====================*/


/*================== checkbox ====================*/
$('#select-all').on('click', function(){
	$(this).toggleClass('checked');
	if ($(this).hasClass('checked')) {
		$('.table-checkbox input:checkbox').prop('checked', true);
	} else {
		$('.table-checkbox input:checkbox').prop('checked', false);
	}
	return false;
});
/*================== checkbox ====================*/


/*================== action button (show / hide) ====================*/
// $('.table-checkbox input:checkbox').click(function(){
// 	if ($('.table-checkbox input:checkbox') || $('#select-all')) {
// 		$('.actions__button').removeAttr('disabled');
// 		$('.actions__counter span').html($('.table-checkbox input:checkbox:checked').length);
// 	}
// });
/*================== action button (show / hide) ====================*/



/*================== redact file name ====================*/
$('.file-name__text').on('click', function(event) {
	$('.file-name').removeClass('show');
	$(this).parents('.file-name').toggleClass('show');
	$('.file-name__box').removeClass('hide');
	$(this).parents('.file-name').find('.file-name__box').addClass('hide');
})

$(document).mouseup(function (e){
	let fileContainer = $('.file-name');
	if (!fileContainer.is(e.target) && fileContainer.has(e.target).length === 0) {
		fileContainer.removeClass('show');
		$('.file-name__text').parents('.file-name').find('.file-name__box').removeClass('hide');
	}
});
/*================== redact file name ====================*/


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

/*================== Offcanvas overlay====================*/

$('#add-btn').on('click', function(){
	$('.overlay-offcanvas').toggleClass('show');
});
$('[data-modal-close]').on('click', function(){
	$('.overlay-offcanvas').toggleClass('show');
});
/*================== Offcanvas overlay====================*/

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

// Графики
const ctx = document.querySelectorAll('.chartBar');
for (let chartItem of ctx) {
	const myChart = new Chart(chartItem, {
		type:'bar',
		data: {
			labels: [`Одновр. речь`, 'Одновр. тишина', 'Макс. длит. речи оператора'],
			datasets: [{
				label: 'First dataset',
				data: [1, 4.7, 4],
				backgroundColor: [
				'#A0D911',
				'#FFA940',
				'#69C0FF',
				],
				borderColor: [
				'#A0D911',
				'#FFA940',
				'#69C0FF',
				],
				borderWidth: 1,
				borderRadius: 4,
			}],
		},
		options: {
			animation: true,
			indexAxis: 'y',
			tooltips: {
				enabled: false
			},
			plugins: {
				legend: {
					display: false,
					title: {
						display: false,
						text: '',
					}
				},
				datalabels: {
					color: '#000',
					textAlign: 'center',
					font: {
						lineHeight: 1.6,
					},
					formatter: function(value) {
						return value + '%';
					},
				}
			},
			scales: {
				y: {
					beginAtZero: true
				}
			// yAxes: [{
			// 	ticks: {
			// 		beginAtZero: true,
			// 		fontFamily: "'Beeline Sans Bold', sans-serif",
			// 		fontSize: 8,
			// 	}
			// }]
		},
		responsive: true, 
		maintainAspectRatio: false,
	},
});
}


