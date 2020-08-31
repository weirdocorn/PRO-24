var bucketEdge1, bucketEdge2, bucketEdge3;
var ball, ground, invisibleGround;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=createSprite(width/2, height-35, width, 10);
	ground.shapeColor=color(255);

	invisibleGround = createSprite(width/2, height-35-3, width, 10)
	invisibleGround.visibile = false;

	bucketEdge1 = createSprite(750, 650, 70, 5);
	bucketEdge2 = createSprite(785, 625, 5, 50);
	bucketEdge3 = createSprite(715, 625, 5, 50);

	ball = createSprite(25, 640, 10, 10);
	ball.shapeColor = color(255,255,255);
	ball.velocityX = 2;
	ball.velocityY = 0;
	ball.friction = 1.2;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  move(ball);

  drawSprites();
}

function move(ball1){
	if(keyCode === UP_ARROW){
		ball1.shapeColor = color(255,255,255);
		ball1.VelocityY = -1;
	}
	if(keyCode === DOWN_ARROW){
		ball1.shapeColor = color(255,255,255);
		ball1.velocityY = 1;
	}
	if(keyCode === "space"){
		ball1.shapeColor = color(255,255,255);
		ball1.velocityX = 0;
		ball1.velocityY = 0;
	}
}

