
// Плавающий скролл


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

$("[data-table-list]").floatingScroll("init");

/*===== Показать другие отчеты ====*/
const btnMore = document.getElementById('btn-more');
const graphElements = document.querySelectorAll('.graph__item').length;
const graphElementsHidden = document.querySelectorAll('.graph__item:nth-child(n+4)');
if (btnMore != null) {
	btnMore.addEventListener('click', () => {
		for (let element of graphElementsHidden) {
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
$('#datepickerOne').each(function () {
	$(this).datepicker({
		navTitles: {
			days: 'MM yyyy'
		},
		format: "dd/mm/yyyy",
		weekends: [6, 0],
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
$('#datepickerTwo').each(function () {
	$(this).datepicker({
		navTitles: {
			days: 'MM yyyy'
		},
		format: "dd/mm/yyyy",
		weekends: [6, 0],
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
$('.datepicker--cells').click(function () {
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
		if (event.target.closest('.settings-btn')) {
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
$('.all-btn').on('click', function (event) {
	event.preventDefault();
	$('.choice-search').removeClass('show');
	$(this).parent('.choice-search').toggleClass('show');
})
$(document).mouseup(function (e) {
	let searchContainer = $('.choice-search');
	if (!searchContainer.is(e.target) && searchContainer.has(e.target).length === 0) {
		searchContainer.removeClass('show');
	}
});
/*================== all btn ====================*/


/*================== checkbox ====================*/
$('#select-all').on('click', function () {
	$(this).toggleClass('checked');
	if ($(this).hasClass('checked')) {
		$('.table-checkbox input:checkbox').prop('checked', true);
	} else {
		$('.table-checkbox input:checkbox').prop('checked', false);
	}
	return false;
});

$('.table-checkbox input:checkbox').each(function () {
	if ($('.table-checkbox input').prop('checked', false)) {
		$('#select-all').removeClass('checked');
	}
})

$('[data-actions-button="delete"]').on('click', function () {
	$('.table-checkbox input').each(function () {
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

$('.table-checkbox input').each(function () {
	$(this).on('click', myCount);
	if (!$(this).prop('checked', false)) {
		$('#select-all').removeClass('checked');
	}
});
$('#select-all').on('click', myCount);
/*================== action button (show / hide) & counter ====================*/


/*================== file-name text (show / hide) ====================*/
$('.arrow-down').each(function () {
	$(this).on('click', function () {
		$(this).toggleClass('active');
		$(this).parent().find($('.file-name__text')).toggleClass('hidden');
	})
})

$('.file-name__box').each(function () {
	let textHeight = $(this).find($('.file-name__text')).height();
	if (textHeight < 16) {
		$(this).find($('.arrow-down')).hide();
	} else {
		$(this).find($('.arrow-down')).show();
		$(this).find($('.file-name__text')).addClass('hidden');
	}
})
/*================== file-name text (show / hide) ====================*/


/*================== words items ====================*/
$('.words__list').each(function () {
	let itemLength = $(this).find($('.words__item')).length;
	let listHeight = $(this).height();
	if (itemLength > 16) {
		$(this).find($('.words__item_all')).show();
	} else {
		$(this).find($('.words__item_all')).hide();
	}
	$(this).find($('.words__all')).on('click', function (e) {
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
$('.file-name__text').on('click', function (event) {
	$('.file-name').removeClass('show');
	$(this).parents('.file-name').toggleClass('show');
	$('.file-name__box').removeClass('hide');
	$(this).parents('.file-name').find('.file-name__box').addClass('hide');
})

$(document).mouseup(function (e) {
	let fileContainer = $('.file-name');
	if (!fileContainer.is(e.target) && fileContainer.has(e.target).length === 0) {
		fileContainer.removeClass('show');
		$('.file-name__text').parents('.file-name').find('.file-name__box').removeClass('hide');
	}
});
/*================== redact file name ====================*/

/*================== Offcanvas overlay====================*/
$('#add-btn').on('click', function () {
	$('.overlay-offcanvas').toggleClass('show');
});
$('[data-modal-close]').on('click', function () {
	$('.overlay-offcanvas').toggleClass('show');
});
/*================== Offcanvas overlay====================*/


/*================== Textarea value ====================*/
$('#formTextarea').val('слово, кредит, деньги, платить, оплачивать, займ, дорого, кредитование, оплата');
$('#formTextarea').focus(function () {
	$(this).select();
});
$('#formTextareaNumbers').val('89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111, 89991111111')
$('#formTextareaNumbers').focus(function () {
	$(this).select();
});
/*================== Textarea value ====================*/

/*================== Проверка на существание загруженных скриптов ====================*/
$('.load-file__item').each(function () {
	if ($(this).length < 1) {
		$('#fileUpload').addClass('hidden');
	} else {
		$('#fileUpload').removeClass('hidden');
		$('.load-file').addClass('hidden');
	}
})
/*================== Проверка на существание загруженных скриптов ====================*/

/*================== DELETE BUTTON ====================*/
$('.delete__button').each(function () {
	$(this).on('click', function () {
		$(this).closest('.tr').remove();
	})
})
/*================== DELETE BUTTON ====================*/


/*================== ADD COMMENT ====================*/
$('[data-comment-button]').on('click', function () {
	let textareaCommentVal = $('#formTextareaComment').val();
	$('.record__comment').css('display', 'block');
	$('.record__comment p').text(textareaCommentVal);
});

$('[data-comment-close]').on('click', function () {
	$('.record__comment').css('display', 'none');
})
/*================== ADD COMMENT ====================*/


/*================== Добавление класса current текущим страницам ====================*/
$('.menu a').each(function () {
	if ($(this).attr('href') == location.href.split("/").slice(-1)) { $(this).addClass('current'); }
});
$('.menu a').each(function () {
	if ($(this).attr('href') == location.href.split("/").slice(-1)) { $(this).closest('.menu__item').addClass('current'); }
});
/*================== Добавление класса current текущим страницам ====================*/

/*================== FILTER-TABLE ====================*/
// // FILTER
$('[data-id="name"]').click(function () {
	if ($(this).find($('input')).is(':checked')) {
		$('[data-td="name"]').show();
	} else {
		$('[data-td="name"]').hide();
	}
})
$('[data-id="status"]').click(function () {
	if ($(this).find($('input')).is(':checked')) {
		$('[data-td="status"]').show();
	} else {
		$('[data-td="status"]').hide();
	}
})
$('[data-id="guide"]').click(function () {
	if ($(this).find($('input')).is(':checked')) {
		$('[data-td="guide"]').show();
	} else {
		$('[data-td="guide"]').hide();
	}
})
$('[data-id="operator"]').click(function () {
	if ($(this).find($('input')).is(':checked')) {
		$('[data-td="operator"]').show();
	} else {
		$('[data-td="operator"]').hide();
	}
})
$('[data-id="client"]').click(function () {
	if ($(this).find($('input')).is(':checked')) {
		$('[data-td="client"]').show();
	} else {
		$('[data-td="client"]').hide();
	}
})
$('[data-id="estimate"]').click(function () {
	if ($(this).find($('input')).is(':checked')) {
		$('[data-td="estimate"]').show();
	} else {
		$('[data-td="estimate"]').hide();
	}
})
$('[data-id="glossary"]').click(function () {
	if ($(this).find($('input')).is(':checked')) {
		$('[data-td="glossary"]').show();
	} else {
		$('[data-td="glossary"]').hide();
	}
})
$('[data-id="period"]').click(function () {
	if ($(this).find($('input')).is(':checked')) {
		$('[data-td="period"]').show();
	} else {
		$('[data-td="period"]').hide();
	}
})
$('[data-id="comment"]').click(function () {
	if ($(this).find($('input')).is(':checked')) {
		$('[data-td="comment"]').show();
	} else {
		$('[data-td="comment"]').hide();
	}
})

// SELECT-GROUP
const selectGroup = document.querySelectorAll('[data-select]');
selectGroup.forEach((item, i, arr) => {
	const selectGroupButton = item.querySelector('[data-select-trigger]')
	const selectGroupDropdown = item.querySelector('[data-select-dropdown]');
	selectGroupButton.addEventListener('click', (e) => {
		e.stopPropagation();
		arr.forEach(arrElement => arrElement.classList.toggle('active', arrElement === item))
	});
	selectGroupDropdown.addEventListener('click', (e) => {
		e.stopPropagation();
	})
});
// Клик снаружи [data-select]. Закрыть [data-select]
document.addEventListener('click', function (e) {
	selectGroup.forEach((item) => {
		if (e.target != item) {
			item.classList.remove('active')
		}
	})
})
// Нажатие на Tab или Escape. Закрыть [data-select]
document.addEventListener('keydown', function (e) {
	selectGroup.forEach((item) => {
		if (e.key === 'Tab' || e.key === 'Escape') {
			item.classList.remove('active')
		}
	})
});

// TABS
const tabsItem = document.querySelectorAll('[data-tab]');
const tabsContent = document.querySelectorAll('[data-tab-content]');
tabsItem.forEach((item) => {
	item.addEventListener('click', (e) => {
		const currentTab = item;
		const tabId = currentTab.dataset.tab;
		const currentContent = document.getElementById(tabId);
		tabsItem.forEach((el) => {
			el.classList.remove('active');
		})
		tabsContent.forEach((el) => {
			el.classList.remove('show');
		})
		currentTab.classList.add('active');
		currentContent.classList.add('show');
	})
})



/*================== FILTER-TABLE ====================*/

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


