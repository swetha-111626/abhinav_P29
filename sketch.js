const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13;
var block14,block15,block16;
var ground,polygon,slingShot;

function preload (){
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  
  ground = new Ground (390,280,225,10);
  mainGround = new Ground (400,380,800,10);

  block1 = new Box (300,195,30,40);
  block2 = new Box (330,195,30,40);
  block3 = new Box (360,195,30,40);
  block4 = new Box (390,195,30,40);
  block5 = new Box (420,195,30,40);
  block6 = new Box (450,195,30,40);
  block7 = new Box (480,195,30,40);

  block8 = new Box (330,155,30,40);
  block9 = new Box (360,155,30,40);
  block10 = new Box (390,155,30,40);
  block11 = new Box (420,155,30,40);
  block12 = new Box (450,155,30,40);

  block13 = new Box (360,115,30,40);
  block14 = new Box (390,115,30,40);
  block15 = new Box (420,115,30,40);

  block16 = new Box (390,75,30,40);

  polygon = Bodies.circle (50,200,20,{restitution:0.8,density:2});
  World.add(world,polygon);

  slingShot = new SlingShot (polygon,{x:120,y:150})

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER)
  background(0);  
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingShot.display();
  ground.display();
  mainGround.display();
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,50,50);

 drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

