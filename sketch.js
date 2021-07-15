
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5, roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(275,450,50);
	bob2 = new Bob(325,450,50);
	bob3 = new Bob(375,450,50);
	bob4 = new Bob(425,450,50);
	bob5 = new Bob(475,450,50);
	roof = new Roof(375, 200,250,30);
	rope1 = new ROPE(bob1.body, roof.body,-100, 0);
	rope2 = new ROPE(bob2.body, roof.body,-50, 0);
	rope3 = new ROPE(bob3.body, roof.body,0, 0);
	rope4 = new ROPE(bob4.body, roof.body,50, 0);
	rope5 = new ROPE(bob5.body, roof.body,100, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:75,y:-75});
	}
}

