'use strict';
const secret = Math.trunc(Math.random() * 100) + 1;
let score = 10;
let highscore = 0;
//Displaying message
const displaymsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};
const dispnum = function (num) {
  document.querySelector('.number').textContent = num;
};
document.querySelector('.check').addEventListener('click', function () {
  const x = Number(document.querySelector('.guess').value);
  console.log(x);
  if (!x) {
    displaymsg('!x! No number !x!');
    document.querySelector('body').style.backgroundColor =
      ' rgb(243, 107, 118)';
  } else if (x === secret) {
    displaymsg('Correct Number🤙🤙');
    document.querySelector('body').style.backgroundColor = '#60b547';
    document.querySelector('.number').style.width = '30rem';
    dispnum(x);
    if (x > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (x !== secret) {
    if (score > 1) {
      displaymsg(
        x > secret ? 'Number is HIGH. Go lower⏬' : 'Number is low. Go higher⏫'
      );
      document.querySelector('body').style.backgroundColor = 'black';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymsg('-x-GAME OVER-x-');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'crimson';
      dispnum('🚫');
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  const secret = Math.trunc(Math.random() * 100) + 1;
  displaymsg('Guess it 🤔');
  document.querySelector('.score').textContent = score;
  dispnum('🤔❓');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
