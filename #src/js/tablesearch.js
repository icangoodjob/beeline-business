let $rows = $('[data-table-list] .tr:not(.thead)');
let buttonSearch = document.getElementById('button-search');

$('#search').on('keypress', function (event) {
	let val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase().split(' '); // Object
	if (event.keyCode === 13) {
		buttonSearch.click();
		event.preventDefault();
		if (val !== []) {
			$rows.show();
		}
		// Удаляем пробелы с обеих концов в строке (trim), Замена регулярных выражений (replace), Приведение к нижнему регистру(toLowerCase)
		$rows.hide().filter(function (event) {
			let text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
			let matchesSearch = true;
			$(val).each(function (index, value) {
				matchesSearch = (!matchesSearch) ? false : ~text.indexOf(value);
			});
			return matchesSearch;
		}).show();
	}
});
$('#button-delete').on('click', (event) => {
	$('#search').val("");
	$rows.show();
	$('input[name="synonyms"]').prop('checked', false);
})

