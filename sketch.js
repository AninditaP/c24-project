
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var bin1;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	bin1= new BIN(900,660,200,20);
	bin2= new BIN(1000,610,20,120);
	bin3= new BIN(800,610,20,120);
	var options={
		isStatic:true
	}
	ground= Bodies.rectangle(600,680,1200,20,options);
	World.add(world,ground);
	console.log(bin1);
	ball= new Ball(200,650,40);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);

	bin1.display();
	bin2.display();
	bin3.display();
	
	ball.display();

	fill("grey")
	rect(ground.position.x,ground.position.y,1200,20);

	keypressed();
  
  drawSprites();
 
}

function keypressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:35,y:-35});

	}



}




