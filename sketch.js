
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree1,ground;
var mango1,mango2,mango3,mango4,mango5;
var boy;
var stoneObj, rope ;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new Tree(1240,500,450,400)
	ground = new Ground(800,690,1600,15)
	boy = new Boy(300,482,150,220)
	stoneObj  = new Stone(300,482,25)
	mango1=new Mango(1450,310,30)
  mango2=new Mango(1360,340,20)
  mango3=new Mango(1310,270,30)
  mango4=new Mango(1230,320,20)
  mango5=new Mango(1150,350,30)
  rope = new Launcher(stoneObj.body,{x:240,y:440})


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("black");
  tree1.display();
  ground.display();
  boy.display();
  stoneObj.display();
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  rope.display()
  detectCollision(stoneObj,mango1)
  detectCollision(stoneObj,mango2)
  detectCollision(stoneObj,mango3)
  detectCollision(stoneObj,mango4)
  detectCollision(stoneObj,mango5)
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
   // Matter.Body.setPosition(stoneObj.body,{x:240,y:440})
    rope.attach(stoneObj.body);
  }
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distence=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if (distence<=lmango.r+lstone.r) {
  Matter.Body.setStatic(lmango.body,false)
}

}



