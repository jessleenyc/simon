var red = document.querySelector('#red');
var blue = document.querySelector('#blue');
var green = document.querySelector('#green');
var yellow = document.querySelector('#yellow');
var start = document.querySelector('.start');
var board = document.querySelector('.game-container');
var end = document.querySelector('.end');
var endMessage = document.querySelector('.num-rounds');
var tryAgain = document.querySelector('.try-again');
var score = document.querySelector('.score');
var home = document.querySelector('.home');
var overlay = document.querySelector('.overlay');
var stopButton = document.querySelector('.stop');
var nice = document.querySelector('.nice');

var pattern = []; //stores random generated pattern
var attempt = []; //stores user attempts
var numRounds = 0; //number of successful rounds
var clicks = 0; //number of clicks 
var counter = 0; //number of correct guesses
var num = 0; //counter index for pattern array

var randomColor = function () {
  // removeNice();
  var random = Math.floor(Math.random() * 4); 
  if (random === 0) {
    red.classList.add('opacity');
  } else if (random === 1) {
    blue.classList.add('opacity');
  } else if (random === 2) {
    green.classList.add('opacity');
  } else if (random === 3) {
    yellow.classList.add('opacity');
  }
  pattern.push(random); //stores random # into pattern sequence
  setTimeout(removeColor, 300); 
  score.textContent = "ROUND: " + numRounds;
};

var removeColor = function () {
  if (red.classList.contains('opacity')) {
      red.classList.remove('opacity');
    } else if (blue.classList.contains('opacity')) {
      blue.classList.remove('opacity');
    } else if (green.classList.contains('opacity')) {
      green.classList.remove('opacity');
    } else if (yellow.classList.contains('opacity')) {
      yellow.classList.remove('opacity');
    }
};
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

var matchColor = function() {
  if (pattern[num] === 0) {
    red.classList.add('opacity');
  } else if (pattern[num] === 1) {
    blue.classList.add('opacity');
  } else if (pattern[num] === 2) {
    green.classList.add('opacity');
  } else if (pattern[num] === 3) {
    yellow.classList.add('opacity');
  }
  setTimeout(removeColor, 300);   
};

var match = function () { //plays back previous pattern
  matchColor();
  if (num < pattern.length) {
    time();
  }
  num++;
};

var time = function () {
  setTimeout(match, 500);
};

var stop = function () { 
  endMessage.textContent = 'You got through ' + numRounds + ' round(s)  !';
  end.style.visibility = 'visible';   
};
//check if user matched computer pattern
var numClicks = function () {
  if (clicks === pattern.length) {
    for (var i = 0; i < pattern.length; i++) {
        if (pattern[i] === attempt[i]) {
          counter++; //num of matched indices should match length of pattern  
          clicks = 0;
        }
    }
    var confirm = function () {
      if (counter === pattern.length) { //if all indices match, go to next round
        // addNice();
        console.log('matches');
        numRounds ++;
        counter = 0; 
        attempt = []; //clear attempts for next round
        setTimeout(match, 500); //plays previous pattern
        var wait = (numRounds + 1) * 500; //waits until pattern is over
        setTimeout(randomColor, wait); //adds a new random color to pattern
        num = 0; //resets pattern index to check at zero!!!
      } else { //fail round, end game
          stop();
        }
      };
      confirm();
    }
};

// var addNice = function () {
//   nice.style.visibility = 'visible';
//   nice.classList.add('fadeInRightBig');
//   nice.classList.remove('fadeOutRightBig');
// };

// var removeNice = function () {
//   nice.classList.remove('fadeInRightBig');
//   nice.style.visibility = 'hidden';
// };

var removeEnd = function () {
  end.style.visibility = 'hidden';
  pattern = [];
  attempt = [];
  numRounds = 0;
  clicks = 0;
  counter = 0;
  score.textContent = "ROUND: " + numRounds;
};

var removeWelcome = function () {
  overlay.style.visibility = 'hidden';
};

board.addEventListener('click', elementClicked);
board.addEventListener('click', numClicks);
start.addEventListener('click', randomColor);
tryAgain.addEventListener('click', removeEnd);
window.addEventListener('click', removeWelcome);
stopButton.addEventListener('click', stop);






