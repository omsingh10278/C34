const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  Rock1 = new Rock(1000,200,100,100);
  boggie1 = new Boggie(100,170,50,50);
  boggie2 = new Boggie(200,170,50,50);
  boggie3 = new Boggie(300,170,50,50);
  boggie4 = new Boggie(400,170,50,50);
  boggie5 = new Boggie(500,170,50,50);
  boggie6 = new Boggie(600,170,50,50);
  chain1 = new Chain(boggie1.body,boggie2.body);
  chain2 = new Chain(boggie2.body,boggie3.body);


 }

function draw() {
  background(bg);  
  Engine.update(myEngine);
  
  Rock1.display();
  boggie1.display();
  boggie2.display();
  boggie3.display();
  boggie4.display();
  boggie5.display();
  boggie6.display();
  chain1.display();
  chain2.display();
 
  }

  
