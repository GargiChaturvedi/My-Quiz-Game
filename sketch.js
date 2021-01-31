var database, gameState, contestantCount, quiz, question, contestant;
var allPlayers;

function setup() {
  createCanvas(650,550);
  database = firebase.database();
  gameState = 0;
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw() {
  background("pink"); 
  
  if(contestantCount === 4) {
    quiz.updateState(1);
  }

  if(gameState === 1) {
    clear();
    quiz.play();
  }
}