// Графики
// const ctx = document.querySelectorAll('.chartBar');
// for (let chartItem of ctx) {
// 	const myChart = new Chart(chartItem, {
// 		type:'bar',
// 		data: {
// 			labels: [`Одновр. речь`, 'Одновр. тишина', 'Макс. длит. речи оператора'],
// 			datasets: [{
// 				label: 'First dataset',
// 				data: [1, 4.7, 4],
// 				backgroundColor: [
// 				'#A0D911',
// 				'#FFA940',
// 				'#69C0FF',
// 				],
// 				borderWidth: 1,
// 				borderRadius: 4,
// 			}],
// 		},
// 		options: {
// 			animation: true,
// 			indexAxis: 'y',
// 			tooltips: {
// 				enabled: true
// 			},
// 			plugins: {
// 				legend: {
// 					display: false,
// 					title: {
// 						display: false,
// 						text: '',
// 					}
// 				},
// 				datalabels: {
// 					color: '#000',
// 					textAlign: 'center',
// 					titleFontColor: '#000',
// 					font: {
// 						lineHeight: 1.6,
// 					},
// 					formatter: function(value) {
// 						return value + '%';
// 					},
// 				}
// 			},
// 			scales: {
// 				y: {
// 					beginAtZero: true
// 				}
// 			// yAxes: [{
// 			// 	ticks: {
// 			// 		beginAtZero: true,
// 			// 		fontFamily: "'Beeline Sans Bold', sans-serif",
// 			// 		fontSize: 8,
// 			// 	}
// 			// }]
// 		},
// 		responsive: true, 
// 		maintainAspectRatio: false,
// 	},
// });
// }

// Одновременная речь
var colors = ['#A0D911', '#FFA940', '#69C0FF'];
const chartBars = document.querySelectorAll('[data-id="chartBar"]');
for (let chartBar of chartBars) {
	const chartLinear = Highcharts.chart(chartBar, {
		chart: {
			type: 'bar'
		},
		title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			type: 'category',
			categories: [
			'Одновр. речь', 
			'Одновр. тишина', 
			'Макс. длит. речи оператора'
			],
			title: {
				text: null
			},
			gridLineWidth: 1,
			gridLineColor: '#CACACA',
			lineWidth: 1,
			minorGridLineWidth: 1,
			lineColor: '#CACACA',
			minorTickLength: 1,
			tickLength: 2,
		},
		yAxis: {
			min: 0,
			max: 6,
			title: {
				text: '',
				align: 'high'
			},
			labels: {
				overflow: 'justify'
			},
			gridLineWidth: 1,
			gridLineColor: '#CACACA',
			lineWidth: 1,
			minorGridLineWidth: 1,
			lineColor: '#CACACA',
			minorTickLength: 1,
			tickLength: 1,
		},
		tooltip: {
			valueSuffix: ' мин',
			enabled: false,
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			},
			series: {
				grouping: false,
				pointWidth: 48,
				borderRadius: 4,
				borderWidth: 0,
			},
		},
		legend: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		series: [
		{
			colorByPoint: true,
			name: "",
			data: [1, 4.7, 4]
		},
		{
			colorByPoint: true,
			name: "",
			data: [1, 4.7, 4]
		},
		{
			colorByPoint: true,
			name: "",
			data: [1, 4.7, 4]
		},
		],
		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom'
					}
				}
			}],
		},
	});
}

// Процент речи
const chartBarsPercent = document.querySelectorAll('[data-id="chartBarPercent"]');
for (let chartBar of chartBarsPercent) {
	const chartLinearPercent = Highcharts.chart(chartBar, {
		chart: {
			type: 'bar'
		},
		title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			type: 'category',
			categories: [
			'Клиент', 
			'Оператор', 
			'Тишина'
			],
			title: {
				text: null
			},
			gridLineWidth: 1,
			gridLineColor: '#CACACA',
			lineWidth: 1,
			minorGridLineWidth: 1,
			lineColor: '#CACACA',
			minorTickLength: 1,
			tickLength: 1,
		},
		yAxis: {
			min: 0,
			max: 50,
			title: {
				text: '',
				align: 'high'
			},
			labels: {
				overflow: 'justify'
			},
			gridLineWidth: 1,
			gridLineColor: '#CACACA',
			lineWidth: 1,
			minorGridLineWidth: 1,
			lineColor: '#CACACA',
			minorTickLength: 1,
			tickLength: 1,
		},
		tooltip: {
			valueSuffix: ' мин',
			enabled: false,
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true,
					format: '{point.y: f}%'
				}
			},
			series: {
				grouping: false,
				pointWidth: 48,
				borderRadius: 4,
				borderWidth: 0,
			},
		},
		legend: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		series: [
		{
			colorByPoint: true,
			name: "",
			data: [43, 20, 37]
		},
		{
			colorByPoint: true,
			name: "",
			data: [43, 20, 37]
		},
		{
			colorByPoint: true,
			name: "",
			data: [43, 20, 37]
		},
		],
		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom'
					}
				}
			}],
		},
	});
}

// Пол
const chartBarsGender = document.querySelectorAll('[data-id="chartBarGender"]');
for (let chartBar of chartBarsGender) {
	const chartLinearGender = Highcharts.chart(chartBar, {
		chart: {
			type: 'bar'
		},
		title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			type: 'category',
			categories: [
			'Клиент', 
			'Оператор', 
			'Тишина'
			],
			title: {
				text: null
			},
			gridLineWidth: 1,
			gridLineColor: '#CACACA',
			lineWidth: 1,
			minorGridLineWidth: 1,
			lineColor: '#CACACA',
			minorTickLength: 1,
			tickLength: 1,
		},
		yAxis: {
			min: 0,
			max: 4,
			title: {
				text: '',
				align: 'high'
			},
			labels: {
				overflow: 'justify'
			},
			gridLineWidth: 1,
			gridLineColor: '#CACACA',
			lineWidth: 1,
			minorGridLineWidth: 1,
			lineColor: '#CACACA',
			minorTickLength: 1,
			tickLength: 1,
		},
		tooltip: {
			valueSuffix: ' мин',
			enabled: false,
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true,
				}
			},
			series: {
				grouping: false,
				pointWidth: 48,
				borderRadius: 4,
				borderWidth: 0,
			},
		},
		legend: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		series: [
		{
			colorByPoint: true,
			name: "",
			data: [2, 0.3, 0]
		},
		{
			colorByPoint: true,
			name: "",
			data: [2, 0.3, 0]
		},
		{
			colorByPoint: true,
			name: "",
			data: [2, 0.3, 0]
		},
		],
		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom'
					}
				}
			}],
		},
	});
}

// Длительность
const chartBarsDuration = document.querySelectorAll('[data-id="chartBarDuration"]');
for (let chartBar of chartBarsDuration) {
	const chartLinearDuration = Highcharts.chart(chartBar, {
		chart: {
			type: 'bar'
		},
		title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			type: 'category',
			categories: [
			'Общая',
			'Речь клиента',
			'Речь оператора'
			],
			title: {
				text: null
			},
			gridLineWidth: 1,
			gridLineColor: '#CACACA',
			lineWidth: 1,
			minorGridLineWidth: 1,
			lineColor: '#CACACA',
			minorTickLength: 1,
			tickLength: 1,
		},
		yAxis: {
			min: 0,
			max: 400,
			title: {
				text: '',
				align: 'high'
			},
			labels: {
				overflow: 'justify'
			},
			gridLineWidth: 1,
			gridLineColor: '#CACACA',
			lineWidth: 1,
			minorGridLineWidth: 1,
			lineColor: '#CACACA',
			minorTickLength: 1,
			tickLength: 1,
		},
		tooltip: {
			valueSuffix: ' мин',
			enabled: false,
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true,
				}
			},
			series: {
				grouping: false,
				pointWidth: 48,
				borderRadius: 4,
				borderWidth: 0,
			},
		},
		legend: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		series: [
		{
			colorByPoint: true,
			name: "",
			data: [253, 100, 50]
		},
		{
			colorByPoint: true,
			name: "",
			data: [253, 100, 50]
		},
		{
			colorByPoint: true,
			name: "",
			data: [253, 100, 50]
		},
		],
		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom'
					}
				}
			}],
		},
	});
}

// Скорость речи
const chartBarsSpeed = document.querySelectorAll('[data-id="chartBarSpeed"]');
for (let chartBar of chartBarsSpeed) {
	const chartLinearSpeed = Highcharts.chart(chartBar, {
		chart: {
			type: 'bar'
		},
		title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			type: 'category',
			categories: [
			'Общая',
			'Речь клиента',
			'Речь оператора'
			],
			title: {
				text: null
			},
			gridLineWidth: 1,
			gridLineColor: '#CACACA',
			lineWidth: 1,
			minorGridLineWidth: 1,
			lineColor: '#CACACA',
			minorTickLength: 1,
			tickLength: 1,
		},
		yAxis: {
			min: 0,
			max: 200,
			title: {
				text: '',
				align: 'high'
			},
			labels: {
				overflow: 'justify'
			},
			gridLineWidth: 1,
			gridLineColor: '#CACACA',
			lineWidth: 1,
			minorGridLineWidth: 1,
			lineColor: '#CACACA',
			minorTickLength: 1,
			tickLength: 1,
		},
		tooltip: {
			valueSuffix: ' мин',
			enabled: false,
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true,
				}
			},
			series: {
				grouping: false,
				pointWidth: 48,
				borderRadius: 4,
				borderWidth: 0,
			},
		},
		legend: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		series: [
		{
			colorByPoint: true,
			name: "",
			data: [120, 100, 50]
		},
		{
			colorByPoint: true,
			name: "",
			data: [120, 100, 50]
		},
		{
			colorByPoint: true,
			name: "",
			data: [120, 100, 50]
		},
		],
		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom'
					}
				}
			}],
		},
	});
}

// Топ 10 слов клиента
const chartPie = document.querySelector('[data-id="chartPie"]');
const chartCircle = Highcharts.chart(chartPie, {
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false,
		reflow: false,
	},
	title: {
		text: '',
		align: 'center',
		verticalAlign: 'middle',
		y: 0
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	},
	accessibility: {
		point: {
			valueSuffix: '%'
		}
	},
	plotOptions: {
		pie: {
			dataLabels: {
				cursor: 'pointer',
				enabled: false,
				distance: -50,
				style: {
					fontWeight: 'bold',
					color: 'white'
				}
			},
			startAngle: 0,
			endAngle: 360,
			center: ['50%', '59%'],
			size: '130%'
		},
	},
	credits: {
		enabled: false
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>'
	},
	series: [{
		colorByPoint: true,
		type: 'pie',
		name: '',
		innerSize: '60%',
		data: [
		['сегмент', 7.09],
		['компания', 4.93],
		['переписывает', 12.98],
		['италия', 25],
		['слушания', 4.81],
		['бабах', 7.09],
		['лес', 7.09],
		['иди', 7.09],
		['клиента', 17.91],
		{
			name: 'сегмент',
			y: 7.09,
			dataLabels: {
				enabled: false
			}
		}
		]
	}]
});

// Топ 10 слов оператора
const chartPie_2 = document.querySelector('[data-id="chartPie-2"]');
const chartCircle_2 = Highcharts.chart(chartPie_2, {
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false,
		reflow: false,
	},
	title: {
		text: '',
		align: 'center',
		verticalAlign: 'middle',
		y: 0
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	},
	accessibility: {
		point: {
			valueSuffix: '%'
		}
	},
	plotOptions: {
		pie: {
			dataLabels: {
				cursor: 'pointer',
				enabled: false,
				distance: -50,
				style: {
					fontWeight: 'bold',
					color: 'white'
				}
			},
			startAngle: 0,
			endAngle: 360,
			center: ['50%', '59%'],
			size: '130%'
		},
	},
	credits: {
		enabled: false
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>'
	},
	series: [{
		colorByPoint: true,
		type: 'pie',
		name: '',
		innerSize: '60%',
		data: [
		['сегмент', 7.09],
		['компания', 4.93],
		['переписывает', 12.98],
		['италия', 25],
		['слушания', 4.81],
		['бабах', 7.09],
		['лес', 7.09],
		['иди', 7.09],
		['клиента', 17.91],
		{
			name: 'сегмент',
			y: 7.09,
			dataLabels: {
				enabled: false
			}
		}
		]
	}]
});
