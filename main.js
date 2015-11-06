//create random color function
//if player selects same color:
//run random color function twice.
//keep counter on how many times player correctly chooses colors. this is the same # of times + 1 you need to run the color function after each round
//if player selects wrong colors, end game notification
//if player selects stop, end game notification.


// var $red = $('#red'); 
// var $blue = $('#blue');
// var $green = $('#green');
// var $yellow = $('#yellow');
// var $colors = [$red, $blue, $green, $yellow];

//for now, rewrite in vanilla js 

//selects random color
// var randomColor = function () {
// 	var random = Math.floor(Math.random() * $colors.length);	
// 	console.log(random);
// 	if (random === 0) {
// 		$colors[0].css('background-color', 'red');
// 		$colors[0].addClass('flash');
// 	} else if (random === 1) {
// 		$colors[1].css('background-color', 'blue');
// 		$colors[1].addClass('flash');
// 	} else if (random === 2) {
// 		$colors[2].css('background-color', 'green');
// 		$colors[2].addClass('flash');
// 	} else if (random === 3) {
// 		$colors[3].css('background-color', 'yellow');
// 		$colors[3].addClass('flash');
// 	}
// 	pattern.push(random); //stores pattern sequence
// }

//curent pattern can replace previous patterns
//event listener must check it player clicks = random pattern

var red = document.querySelector('#red');
var blue = document.querySelector('#blue');
var green = document.querySelector('#green');
var yellow = document.querySelector('#yellow');
var colors = [red, blue, green, yellow];

var pattern = [];
var attempt = [];
var numRounds = [0];

var randomColor = function () {
	var random = Math.floor(Math.random() * colors.length);	
	console.log(random);
	if (random === 0) {
		colors[0].style.background = 'red';
		colors[0].classList.add('flash');
	} else if (random === 1) {
		colors[1].style.background = 'blue';
		colors[1].classList.add('flash');
	} else if (random === 2) {
		colors[2].style.background = 'green';
		colors[2].classList.add('flash');
	} else if (random === 3) {
		colors[3].style.background = 'yellow';
		colors[3].classList.add('flash');
	}
	pattern.push(random); //stores pattern sequence
}

var elementClicked = function (event) { 
	var element = event.target;	
	console.log(red);
	console.log(colors[0]);
	if (event.target === colors[0]) {
		attempt.push(colors[0]); //stores clicked element in attempt[]
	} else if (event.target === colors[1]) {
		attempt.push(colors[1]);
	} else if (event.target === colors[2]) {
		attempt.push(colors[2]);
	} else if (event.target === colors[3]) {
		attempt.push(colors[3]);
	}
};
	//still need to check if target was a color. if so, identify color array index
document.addEventListener('click', elementClicked);
















