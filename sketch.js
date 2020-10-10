const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var object;

function setup() {

  createCanvas(800,400);
  engine= Engine.create();
  world = engine.world;

  var object_options={
    isStatic : true
  }

  object =Bodies.rectangle(150,150,30,30,object_options);
  World.add(world,object)


  console.log(object)
  console.log(object.position.x)
  console.log(object.position.y)
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background("blue");  
  Engine.update(engine);
  rectMode(CENTER)
 rect(object.position.x,object.position.y,100,100);
//  rect(200,200,100,100);

 // drawSprites();
}