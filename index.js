var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceNumber1 = "images/dice" + randomNumber1 + ".png";
var diceNumber2 = "images/dice" + randomNumber2 + ".png";

if(randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = "🏆Player 1 Wins";
}
else if(randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = "Player 2 Wins🏆";
}
else {
  document.querySelector('h1').innerHTML = "Draw";
}

document.querySelector('img.dice1').setAttribute("src", diceNumber1);
document.querySelector('img.dice2').setAttribute("src", diceNumber2);
