const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground;
var ball;
var box1,box2;
var pig1,pig2;
var backgroundImage;
function preload(){
  backgroundImage=loadImage("sprites/bg.png");
}
function setup() {
  createCanvas(1500,700);
  myEngine=Engine.create();
  myWorld=myEngine.world;
  /*var ground_options={
    isStatic:true

  }
  ground= Bodies.rectangle(200,380,400,20,ground_options);
  World.add(myWorld,ground);
  console.log(ground);
  var ball_options={
    restitution:1
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ball);
  console.log(ball);
  
  //Matter.Body.setStatic(ball.body,false);*/

  box1 = new Box(900,630,70,70);//865-935=70
  box2 = new Box(1100,630,70,70);
  box3 = new Box(900,555,70,70);
  box4 = new Box(1100,555,70,70)
  ground=new Ground(750,690,1500,20);//670
  pig1 = new Pig(1000,630);//935+25=960
  pig2=new Pig(1000,555);
  log1=new Log(1000,600,270,PI/2)//865-1135
  log2=new Log(1000,520,270,PI/2);
  box5 =new Box(1000,485,70,70);
  log3= new Log(920,485,150,PI/7);
  log4= new Log(1020,485,150,-PI/7);
  bird=new Bird(200,200);
    console.log(log1.body);
}

function draw() {
  Engine.update (myEngine);
  background(backgroundImage);  
  /*rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);*/
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display()
  log2.display();
  box5.display();
 log3.display();
  log4.display();
  bird.display();
}
