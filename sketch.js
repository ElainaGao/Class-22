const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;
function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world=engine.world;

  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground)
  var ball_option={
  restitution:2.0
  }
  ball=Bodies.circle(200,200,30,ball_option);
  World.add(world,ball);

}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER)  
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30);
}