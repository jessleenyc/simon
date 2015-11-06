//create random color function
//if player selects same color:
//run random color function twice.
//keep counter on how many times player correctly chooses colors. this is the same # of times + 1 you need to run the color function after each round
//if player selects wrong colors, end game notification
//if player selects stop, end game notification.
var red = document.querySelector('#red');
var blue = document.querySelector('#blue');
var green = document.querySelector('#green');
var yellow = document.querySelector('#yellow');
var colors = [red, blue, green, yellow];

var pattern = [];
var attempt = [];
var numRounds = 0;

var randomColor = function () {
	var random = Math.floor(Math.random() * colors.length);	
		if (random === 0) {
			colors[0].classList.add('opacity');
		} else if (random === 0) {
			colors[1].classList.add('opactiy')
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
	console.log(numRounds);
};

//first store user attempt
var elementClicked = function (event) { 
	var element = event.target;	
	if (element === red) {
		attempt.push(0); //stores user attempts in array
	} else if (element === blue) {
		attempt.push(1);
	} else if (element === green) {
		attempt.push(2);
	} else if (element === yellow) {
		attempt.push(3);
	}
	//see if attempts & patterns match (same length & indices). do nothing until the array lenghts match. and then check each index. or check each as they come in until it hits the lenght of the pattern
};

document.addEventListener('click', elementClicked);

//push random color into end of pattern array. empty attempts array. 

var checkMatch = function () {
if (pattern.length = attempt.length) {
	for (var i = 0; i < pattern.length; i++) {
		for (var j=0; j < attempt.length; j++) {
			if (i === j) {
				console.log('pass to next round');
			}
			else {
				console.log('failed to match lenght');
			}
		}
	}
}
else {
	console.log('wrong number of moves');
}
};





// var patternGen = function (patternColor) {
// 		if (patternColor === 0) {
// 		console.log('red');
// 		colors[0].style.background = 'red';
// 		colors[0].classList.add('flash');
// 	} else if (patternColor === 1) {
// 		console.log('red');
// 		colors[1].style.background = 'blue';
// 		colors[1].classList.add('flash');
// 	} else if (patternColor === 2) {
// 		console.log('red');
// 		colors[2].style.background = 'green';
// 		colors[2].classList.add('flash');
// 	} else if (patternColor === 3) {
// 		console.log('red');
// 		colors[3].style.background = 'yellow';
// 		colors[3].classList.add('flash');
// 	}
// };

// pattern.forEach(patternGen); 

//stores pattern sequence as function. 
// var patterns = pattern.map(function (patternColor, done) {
// 		if (patternColor === 0) {
// 			console.log('red');
// 		colors[0].style.background = 'red';
// 		colors[0].classList.add('flash');
// 	} else if (patternColor === 1) {
// 		console.log('blue');
// 		colors[1].style.background = 'blue';
// 		colors[1].classList.add('flash');
// 	} else if (patternColor === 2) {
// 		console.log('green');
// 		colors[2].style.background = 'green';
// 		colors[2].classList.add('flash');
// 	} else if (patternColor === 3) {
// 		console.log('yellow');
// 		colors[3].style.background = 'yellow';
// 		colors[3].classList.add('flash');
// 	}
// });

// var runColor = function () {
//   var nextColor = patterns.shift();
//   nextColor(runNextColor);
// };

// var runNextColor = function() {
//   if (patterns.length === 0) {
//     return;
//   }

//   setTimeout(runColor, 2000);
// }
// randomColor();
// runNextColor();
// randomColor();

//to become:

// pattern = [patternGen[0], patternGen[2], patternGen[3]];



//pattern[0](); 
//check LOTR timers so each execute after another 




//modal used fixed div that appears, half opacity to dim background 

//delayed animations in arrays i*300 setTime Out 













