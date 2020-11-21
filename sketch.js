
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground();
	box1 =new Bin(600,660,120,10);
	box2 =new Bin(660,630,10,70);
	box3 =new Bin(540,630,10,70);
	paper1=new Paper(200,650);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  paper1.display();

 
}

function keyPressed(){
if (keyCode=== UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:3,y:-3});
}
}



