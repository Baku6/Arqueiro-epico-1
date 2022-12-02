const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
 var options = {
  isStatic: true
 }
  //criar corpo do jogador
player = Bodies.rectangle(30, 200, 180, 150, options);
World.add(world, player);

playerBase = Bodies.rectangle(30, 350, 180, 150, options);
World.add(world, playerBase);
}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  image(playerimage, player.position.x, player.position.y, 180, 150);

  //exibir a imagem da base do jogador usando a função image()
image(baseimage, playerBase.position.x, playerBase.position.y, 180, 150);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
