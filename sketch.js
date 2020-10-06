const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball,ground,ball1;

function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    restitution:1,
    mass:2.5
  } 

  ball = Bodies.rectangle(100,50,50,50,options);
  World.add(world,ball);
  ball1 = Bodies.circle(400,50,20,options);
  World.add(world,ball1);
  console.log(ball1);
 var options = {
   isStatic:true
 } 
  ground = Bodies.rectangle(300,height,600,50,options);
  World.add(world,ground);

  

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ball.position.x,ball.position.y,50,50);
  rect(ground.position.x,ground.position.y,600,50);
  ellipse(ball1.position.x,ball1.position.y,50);
  drawSprites();
}