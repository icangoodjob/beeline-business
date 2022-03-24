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

// Календари (+ неактивные воскресенье и суббота)
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
	if (!$(this).hasClass('.-weekend-')) {
		$('.datepicker').removeClass('active');
	} else {
		return;
	}
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

$('[data-actions-button="delete"]').on('click', function(){
	$('.table-checkbox input').each(function(){
		$(this).prop('checked', false);
	});
	$(this).hide();
	$('[data-actions-button="upload"]').hide();
	$('#select-all').removeClass('checked');
})
/*================== checkbox ====================*/


/*================== action button (show / hide) & counter ====================*/
function myCount() {
	let counterLength = $('.actions__counter span').html($('.table-checkbox input:checked').not($('#select-all input')).length);
	if ($('.actions__counter span').html() == 0) {
		$('[data-actions-button]').hide();
	} else {
		$('[data-actions-button]').show();
	}
};
myCount();

$('.table-checkbox input').each(function(){
	$(this).on('click', myCount);
});
$('#select-all').on('click', myCount);
/*================== action button (show / hide) & counter ====================*/


/*================== file-name text (show / hide) ====================*/
$('.arrow-down').each(function(){
	$(this).on('click',function(){
		$(this).toggleClass('active');
		$(this).parent().find($('.file-name__text')).toggleClass('hidden');
	})
})

$('.file-name__box').each(function(){
	let textHeight = $(this).find($('.file-name__text')).height();
	console.log(textHeight);
	if (textHeight < 16) {
		$(this).find($('.arrow-down')).hide();
	} else {
		$(this).find($('.arrow-down')).show();
		$(this).find($('.file-name__text')).addClass('hidden');
	}
})
/*================== file-name text (show / hide) ====================*/


/*================== words items ====================*/
$('.words__list').each(function(){
	console.log($(this));
	let itemLength =  $(this).find($('.words__item')).length;
	let listHeight = $(this).height();
	console.log(itemLength);
	console.log(listHeight);
	if (itemLength > 16) {
		$(this).find($('.words__item_all')).show();
	}
	else if (listHeight > 26) {
		$(this).find($('.words__item_all')).show();
	}
	else {
		$(this).find($('.words__item_all')).hide();
	}
	$(this).find($('.words__all')).on('click', function(e){
		$(this).closest('.words__list').find($('.words__item:nth-child(n+16)')).toggleClass('active');
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(this).text('Скрыть слова');
		} else {
			$(this).text('Все слова');
		}
	})
})

/*================== words items ====================*/


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


/*================== load files====================*/
const filesItem = document.querySelectorAll('.load-file__item').length;
const uploadBtn = document.getElementById('upload-btn');
if (filesItem) {
	if (filesItem >= 0) {
		uploadBtn.removeAttribute('disabled');
	} else {
		uploadBtn.setAttribute('disabled');
	}
}
// /*================== files====================*/

/*================== Offcanvas overlay====================*/
$('#add-btn').on('click', function(){
	$('.overlay-offcanvas').toggleClass('show');
});
$('[data-modal-close]').on('click', function(){
	$('.overlay-offcanvas').toggleClass('show');
});
/*================== Offcanvas overlay====================*/


/*================== Textarea value ====================*/
$('#formTextarea').val('слово, кредит, деньги, платить, оплачивать, займ, дорого, кредитование, оплата');
$('#formTextarea').focus(function(){
	$(this).select();
});
$('#formTextareaNumbers').val('89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111')
$('#formTextareaNumbers').focus(function(){
	$(this).select();
});
/*================== Textarea value ====================*/

/*================== Проверка на существание загруженных скриптов ====================*/
$('.load-file__item').each(function(){
	if ($(this).length < 1){
		$('#fileUpload').addClass('hidden');
	}  else {
		$('#fileUpload').removeClass('hidden');
		$('.load-file').addClass('hidden');
	}
})
/*================== Проверка на существание загруженных скриптов ====================*/

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
/*================== RANGE-SLIDER ====================*/

//Получаем инпут file в переменную
const formFile = document.getElementById('formFile');
	//Получаем див для превью в переменную
	const formPreview = document.getElementById('formPreview');
	//Слушаем изменения в инпуте file
	if (formFile != null) {
		formFile.addEventListener('change', () => {
			uploadFile(formFile.files[0]);
		});
	}
	function uploadFile(file) {
		// провераяем тип файла
		if (!['image/jpeg', 'image/png', 'image/gif', '.docx'].includes(file.type)) {
			alert('Неверный тип файла');
			formFile.value = '';
			return;
		}
		// проверим размер файла (<2 Мб)
		if (file.size > 2 * 1024 * 1024) {
			alert('Файл должен быть менее 2 МБ.');
			return;
		}
		var reader = new FileReader();
		reader.onload = function (e) {
			formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
		};
		reader.onerror = function (e) {
			alert('Ошибка');
		};
		reader.readAsDataURL(file);
	}

