/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let playerScore, roundScore, activePlayer, gamePlaying, rollSum;
newGame();
let rollDice = document.querySelector(".btn-roll").addEventListener("click", function(){
  if(gamePlaying){
let roll1 = Math.floor(Math.random() * 6 + 1);
let roll2 = Math.floor(Math.random() * 6 + 1);
let rollSum = roll1 + roll2;
document.querySelector('.dice1').src = "dice-" + roll1 + ".png";
document.querySelector('.dice2').src = "dice-" + roll2 + ".png";

if(rollSum === 12){
document.querySelector('#current-' + activePlayer).innerHTML = '0';
document.querySelector('#score-' + activePlayer).innerHTML = '0';
playerChange();
}

if (roll1 !== 1 && roll2 !== 1){
  roundScore += roll1 + roll2;
  document.getElementById("current-" + activePlayer).innerHTML = roundScore;
}else{
playerChange();
};
}});

// Hold
document.querySelector(".btn-hold").addEventListener("click", function(){
  if(gamePlaying){
playerScore[activePlayer] += roundScore;
document.getElementById('score-' + activePlayer).innerHTML = playerScore[activePlayer];
let finalScore = document.getElementById("number").value;
if(finalScore){
if(playerScore[activePlayer] >= finalScore){
  document.getElementById("name-" + activePlayer).textContent = "Winner!";
  document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
  document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
document.querySelector('.player-' + activePlayer + '-panel').classList.remove("active");
gamePlaying = false;
}else{
  playerChange();
};
}else{
  if(playerScore[activePlayer] >= 100){
    document.getElementById("name-" + activePlayer).textContent = "Winner!";
    document.querySelector('.dice1').style.display = 'none';
      document.querySelector('.dice2').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
  document.querySelector('.player-' + activePlayer + '-panel').classList.remove("active");
  gamePlaying = false;
  }else {
    playerChange();
  };
}}});

//Start new game
function newGame(){
playerScore = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove("active");
document.querySelector('.player-1-panel').classList.remove("active");
document.querySelector('.player-0-panel').classList.add("active");
document.getElementById('score-0').innerHTML = '0';
document.getElementById('score-1').innerHTML = '0';
document.getElementById('current-0').innerHTML = '0';
document.getElementById('current-1').innerHTML = '0';
};

//New Game Button
document.querySelector(".btn-new").addEventListener("click", function(){
  newGame();
});

// Player Switch
function playerChange(){
  roundScore = 0;
  document.querySelector('.player-0-panel').classList.toggle("active");
  document.querySelector('.player-1-panel').classList.toggle("active");
  document.getElementById('current-0').innerHTML = '0';
  document.getElementById('current-1').innerHTML = '0';
  (activePlayer === 0) ? activePlayer = 1: activePlayer = 0;

}
