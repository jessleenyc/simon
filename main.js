var red = document.querySelector('#red');
var blue = document.querySelector('#blue');
var green = document.querySelector('#green');
var yellow = document.querySelector('#yellow');
var colors = [red, blue, green, yellow];
var start = document.querySelector('.start-button');
var board = document.querySelector('.game-container');
var end = document.querySelector('#overlay');
var endMessage = document.querySelector('.num-rounds');
var tryAgain = document.querySelector('.try-again');
var score = document.querySelector('.score');

var pattern = [];
var attempt = [];
var numRounds = 0;
var clicks = 0;
var counter = 0;

var randomColor = function () {
	var random = Math.floor(Math.random() * colors.length);	
		if (random === 0) {
			colors[0].classList.add('opacity');
		} else if (random === 1) {
			colors[1].classList.add('opacity')
		} else if (random === 2) {
			colors[2].classList.add('opacity');
		} else if (random === 3) {
			colors[3].classList.add('opacity');
		}
	pattern.push(random); //stores random # into pattern sequence

	setTimeout(function (event) {
		if (colors[0].classList.contains('opacity')) {
			colors[0].classList.remove('opacity')
		} else if (colors[1].classList.contains('opacity')) {
			colors[1].classList.remove('opacity')
		} else if (colors[2].classList.contains('opacity')) {
			colors[2].classList.remove('opacity')
		} else if (colors[3].classList.contains('opacity')) {
			colors[3].classList.remove('opacity');
		}
	}, 150);
	numRounds++;
	score.textContent = "ROUND: " + numRounds;
};

var matchColor = function(pattern) {
	if (pattern === 0) {
		colors[0].classList.add('opacity');
	} else if (pattern === 1) {
		colors[1].classList.add('opacity')
	} else if (pattern === 2) {
		colors[2].classList.add('opacity');
	} else if (pattern === 3) {
		colors[3].classList.add('opacity');
	}
	setTimeout(function (event) {
		if (colors[0].classList.contains('opacity')) {
			colors[0].classList.remove('opacity')
		} else if (colors[1].classList.contains('opacity')) {
			colors[1].classList.remove('opacity')
		} else if (colors[2].classList.contains('opacity')) {
			colors[2].classList.remove('opacity')
		} else if (colors[3].classList.contains('opacity')) {
			colors[3].classList.remove('opacity');
		}
	}, 150);	
}

//store user attempt
	var elementClicked = function (event) { 
		var element = event.target;	
		if (element === red) {
			attempt.push(0); 
		} else if (element === blue) {
			attempt.push(1);
		} else if (element === green) {
			attempt.push(2);
		} else if (element === yellow) {
			attempt.push(3);
		}
		clicks++;
	};

//check if user matched computer pattern
var numClicks = function () {
	if (clicks === pattern.length) {
		console.log('correct number of ' + clicks);
		for (var i = 0; i < pattern.length; i++) {
				if (pattern[i] === attempt[i]) {
					counter++;	
				}
		}
	var nextRound = function () {
			if (counter === pattern.length) { //complete round, go to next round
				console.log('pass to next round'); 
					for (var i = 0; i < pattern.length; i++) {
						setTimeout(matchColor(pattern[i]), i * 5000);
					}	
				randomColor();
			} else { //fail round, end game
				console.log('fail');
				// endMessage.textContent = 'You got through ' + numRounds + ' round(s)	!';
				// end.style.visibility = 'visible';	
			}
		}
		nextRound();
	}
};

// var homePage = function () {
// 	end.style.visibility = 'hidden';
// 	pattern = [];
// 	attempt = [];
// 	numRounds = 0;
// 	clicks = 0;
// 	counter = 0;
// }



board.addEventListener('click', elementClicked);
board.addEventListener('click', numClicks);
start.addEventListener('click', randomColor);
// tryAgain.addEventListener('click', homePage);


//pattern[0](); 

//delayed animations in arrays i*300 setTime Out 













