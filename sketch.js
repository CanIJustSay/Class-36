var backgroundImg;
var gameState = 0;
var playerCount;
var database,Form,Player,Game;
function setup(){
  database = firebase.database();
  createCanvas(400,400);
  Game = new game();
  Game.getState();
  Game.start();
}

function draw(){
}

