const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin,paper

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine)

	


	Engine.run(engine);
	dustbin1=new DUSTBIN(740,510,10,100)
	dustbin2=new DUSTBIN(670,570,150,20)
	dustbin3=new DUSTBIN(600,510,10,100)
	paper=new PAPER(100,500,30)
  ground=new DUSTBIN(400,590,800,15)
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  ground.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-125})
	}
}



