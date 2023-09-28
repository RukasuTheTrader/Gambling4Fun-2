let playerScore = 0;
let hostScore = 0;
let balance = 1000;

function startGame() {
  let bet = parseInt(document.getElementById('bet').value);
  if (isNaN(bet) || bet < 10 || bet > balance) return alert('Ungültiger Einsatz!');

  balance -= bet;
  updateBalance();
  document.getElementById('game').style.display = 'block';
}

function rollDice() {
  let roll = Math.floor(Math.random() * 100) + 1;
  playerScore += roll;
  document.getElementById('player').innerText = 'Spieler: ' + playerScore;
  if (playerScore > 100) endGame(false);
}

function hold() {
  while (hostScore < playerScore && hostScore <= 100) {
    let roll = Math.floor(Math.random() * 100) + 1;
    hostScore += roll;
  }
  document.getElementById('host').innerText = 'Host: ' + hostScore;
  endGame(hostScore < playerScore || hostScore > 100);
}

function endGame(playerWon) {
  let bet = parseInt(document.getElementById('bet').value);
  if (playerWon) balance += bet * 2;
  updateBalance();
  document.getElementById('result').innerText = playerWon ? 'Du gewinnst!' : 'Du verlierst!';
}

function updateBalance() {
  document.getElementById('balance').innerText = 'Balance: ' + balance + ' Jack';
}

function newGame() {
  document.getElementById('game').style.display = 'none';
  document.getElementById('player').innerText = 'Spieler: 0';
  document.getElementById('host').innerText = 'Host: 0';
  document.getElementById('result').innerText = '';
  playerScore = 0;
  hostScore = 0;
}
