const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions =[];
var value=5;
var gamestate="inbucket"
var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

if (gamestate==="inbucket"){
  particles.push(new Particle(mouseX,0, 10,10));
  
}
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
  console.log(value)
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   if(frameCount%60===0 && gamestate==="inbucket"){
     particles.push(new Particle(mouseX,0, 10,10));
     value=value-1
   }
   if ( value===0){
    gamestate="outbucket"
      }
  if (keyCode===32&& frameCount%60===0){
    value=6;
  gamestate="inbucket"
  value=value-1

  }
 
  if (keyCode===32&&value===0){
    gamestate="inbucket";

  }
   for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
   fill(255)
   textSize(20)
   text("5,000",175,750);
   text("1,000",95,750);
   text("500",260,750);
   text("100",340,750);
   text("3000",500,750);
   text("10,000",10,750);
   text("50",430,750);
   text("1,00,000",560,750);
   text("0",670,750);
   text("5",755,750);




}