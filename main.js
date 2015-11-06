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
var numRounds = [0];

// var randomColor = function () {
// 	var random = Math.floor(Math.random() * colors.length);	
// 	console.log(random);
// 	if (random === 0) {
// 		colors[0].style.background = 'red';
// 		colors[0].classList.add('flash');
// 	} else if (random === 1) {
// 		colors[1].style.background = 'blue';
// 		colors[1].classList.add('flash');
// 	} else if (random === 2) {
// 		colors[2].style.background = 'green';
// 		colors[2].classList.add('flash');
// 	} else if (random === 3) {
// 		colors[3].style.background = 'yellow';
// 		colors[3].classList.add('flash');
// 	}
// 	pattern.push(random); //stores pattern sequence
// };

// randomColor();

// //first store user attempt
// var elementClicked = function (event) { 
// 	var element = event.target;	
// 	if (element === red) {
// 		attempt.push(0); //stores user attempts in array
// 	} else if (element === blue) {
// 		attempt.push(1);
// 	} else if (element === green) {
// 		attempt.push(2);
// 	} else if (element === yellow) {
// 		attempt.push(3);
// 	}
// 	//see if attempts & patterns match (same length & indices). do nothing until the array lenghts match. and then check each index. or check each as they come in until it hits the lenght of the pattern
// };

// if (pattern === attempt) { //how do you wait to execute this? create for loop that iterates through. //push random color into end of pattern array. empty attempts array. 
// 	randomColor();
// 	randomColor();
// } else {
// 	alert('you clicked the wrong button!');
// }

pattern = [0, 1, 2];

var patternGen = function (patternColor) {
		if (patternColor === 0) {
		console.log('red');
		colors[0].style.background = 'red';
		colors[0].classList.add('flash');
	} else if (patternColor === 1) {
		console.log('red');
		colors[1].style.background = 'blue';
		colors[1].classList.add('flash');
	} else if (patternColor === 2) {
		console.log('red');
		colors[2].style.background = 'green';
		colors[2].classList.add('flash');
	} else if (patternColor === 3) {
		console.log('red');
		colors[3].style.background = 'yellow';
		colors[3].classList.add('flash');
	}
};

pattern.forEach(patternGen); 

//map each array so that it's a function and not number

var patterns = pattern.map(function (patternColor) {
		if (patternColor === 0) {
		colors[0].style.background = 'red';
		colors[0].classList.add('flash');
	} else if (patternColor === 1) {
		colors[1].style.background = 'blue';
		colors[1].classList.add('flash');
	} else if (patternColor === 2) {
		colors[2].style.background = 'green';
		colors[2].classList.add('flash');
	} else if (patternColor === 3) {
		colors[3].style.background = 'yellow';
		colors[3].classList.add('flash');
	}
});

//to become:

pattern = [patternGen[0], patternGen[2], patternGen[3]];



//pattern[0](); 
//check LOTR timers so each execute after another 

// document.addEventListener('click', elementClicked);


//modal used fixed div that appears, half opacity to dim background 













