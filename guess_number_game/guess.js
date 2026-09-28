let num = Math.floor( Math.random()*100+1);
console.log(num);

const text = document.getElementById('guessField');
const submit = document.getElementById('subt');
const prev = document.querySelector('.guesses');
const remain = document.querySelector('.lastResult');
const low_high = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let playgames = true;

if(playgames){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(text.value,10);
    ValidateGuess(guess)
  });
}
function ValidateGuess(guess){
  if(isNaN(guess)){
    alert('Enter a valid number');
  }
  else if(prevguess.includes(guess)){
    alert('same number repeated');
  }
  else if(guess < 1){
    alert('Number is TOO LOW');
  }
  else if(guess >100){
    alert('Number is  TOO HIGH');
  }
  else{
    prevguess.push(guess);
    if(numguess === 10 && guess !== num){
      displayGuess(guess);
      displaymessage(`game over the number is ${num}`)
      endgame();
    }
    else{
      displayGuess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess){
  if(guess === num){
    displaymessage("your guess was right");
    endgame();
  }
  else if(guess > num){
    displaymessage("your number is greater");
  }
  else if(guess < num){
    displaymessage("your number is lesser");
  }
}

function displayGuess(guess){
  text.value = '';
  prev.innerHTML += `${guess}, `;
  numguess++;
  remain.innerHTML = `${11 - numguess}`;
}

function displaymessage(message){
  low_high.innerHTML = `<h2>${message}</h2>`;
}

function endgame(){
  text.value = '';
  text.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playgames = false;
  startgame();
}
function startgame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    num = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    prev.innerHTML = '';
    remain.innerHTML = `${11 - numguess} `;
    text.removeAttribute('disabled');
    startOver.removeChild(p);

    playgames = true;
});
}