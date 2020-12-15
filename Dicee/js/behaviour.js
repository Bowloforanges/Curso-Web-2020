function resetGameStyles() {

  demon.pause();
  demon.load();
  seraphim.pause();
  seraphim.load();

  document.getElementById("resultText").innerHTML = '...';
  document.getElementById("player1Dice").src = 'img/dice-1.png';
  document.getElementById("player2Dice").src = 'img/dice-1.png';

  document.getElementById("player1Dice").classList.remove('resultImgAnimationTie');
  document.getElementById("player1Dice").classList.remove('resultImgAnimationLose');
  document.getElementById("player1Dice").classList.add('dice');

  document.getElementById("player2Dice").classList.remove('resultImgAnimationTie');
  document.getElementById("player2Dice").classList.remove('resultImgAnimationLose');
  document.getElementById("player2Dice").classList.add('dice');

}

function evaluateResults(p1Score, p2Score) {

  resetGameStyles();

  if (p1Score == p2Score) {
    //Tie

    seraphim.play();
    document.getElementById("resultText").innerHTML = 'Thou get to keep thy souls this time, mortals.';

    document.getElementById("player2Dice").src = 'img/confetti2.gif';
    document.getElementById("player1Dice").src = 'img/confetti2.gif';
    document.getElementById("player2Dice").classList.remove('dice');
    document.getElementById("player1Dice").classList.remove('dice');
    document.getElementById("player2Dice").classList.add('resultImgAnimationTie');
    document.getElementById("player1Dice").classList.add('resultImgAnimationTie');

  } else if (p1Score > p2Score) {
    //P2 lost
    demon.play();
    document.getElementById("resultText").innerHTML = 'Player 2, thy soul shall be consumed.';
    document.getElementById("player2Dice").src = 'img/baphomet.png';
    document.getElementById("player2Dice").classList.remove('dice');
    document.getElementById("player2Dice").classList.add('resultImgAnimationLose');
  } else {
    //P1 lost
    demon.play();
    document.getElementById("resultText").innerHTML = 'Player 1, thy soul shall be consumed.';
    document.getElementById("player1Dice").src = 'img/baphomet.png';
    document.getElementById("player1Dice").classList.remove('dice');
    document.getElementById("player1Dice").classList.add('resultImgAnimationLose');
  }

}

function sleepobeepo(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function shuffleDice() {

  resetGameStyles();

  let randDice = ""
  for (let i = 0; i < 8; i++) {

    randDice = "img/dice-" + Math.ceil(Math.random() * 6) + ".png";
    document.getElementById("player1Dice").src = randDice;

    randDice = "img/dice-" + Math.ceil(Math.random() * 6) + ".png";
    document.getElementById("player2Dice").src = randDice;

    await sleepobeepo(280);
  }

  let score1 = Math.ceil(Math.random() * 6);
  document.getElementById("player1Dice").src = "img/dice-" + score1 + ".png";
  console.log(score1);

  let score2 = Math.ceil(Math.random() * 6);
  document.getElementById("player2Dice").src = "img/dice-" + score2 + ".png";
  console.log(score2);

  evaluateResults(score1, score2);

}

function rollDice() {

  var drumRoll = document.getElementById("drums");
  var demon = document.getElementById("demon");
  var seraphim = document.getElementById("seraphim");

  var score1 = "";
  var score2 = "";

  drumRoll.play();

  //animar dados
  shuffleDice();


}
