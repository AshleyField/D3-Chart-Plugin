var skills = [
	{x:'HTML',y:70},
	{x:'CSS',y:75},
	{x:'JS',y:90},
	{x:'Design',y:80},
	{x:'UX',y:60}

];

makeChart(skills,{
	width:1000,
	selector: '.another-chart',
	margin: 80
});

var two = [
	{x:'HTML',y:70},
	{x:'CSS',y:75},
	{x:'JS',y:90},
	{x:'Design',y:80},
	{x:'UX',y:60},
	{x:'Proposal',y:40},
	{x:'HTML',y:70},
	{x:'CSS',y:75},
	{x:'JS',y:90},
	{x:'Design',y:80},
	{x:'UX',y:60},
	{x:'Proposal',y:40},

];

makeChart(two, {
	yRange: [0,100],
	colors: ['silver', 'gold']
});

