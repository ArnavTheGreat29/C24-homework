
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(150,300);
	ground = new Ground(400,695);
	dustbin = new Dustbin(600,675,10,50);
	dustbin1 = new Dustbin(650,695,100,10);
	dustbin2 = new Dustbin(700,675,10,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();

  

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.paper, paper.paper.position, {x:85,y:-85})
	}
	
	
	}

