var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rb1,rb2,rb3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//rb1=createSprite(400,550,200,20);
	//rb1.shapeColor="red"
	
	rb2=createSprite(500,510,20,100)
	rb2.shapeColor="red"

	rb3=createSprite(300,510,20,100)
	rb3.shapeColor="red"
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);

	rb1=Bodies.rectangle(400,550,200,20,{restitution:0.8,isStatic:true})
	fill("red")
	World.add(world,rb1)
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y  
  //bounceOff(packageSprite,rb1);
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}
function bounceOff(packageSprite,rb1){
    if (packageSprite.x - rb1.x < rb1.width/2 + packageSprite.width/2
      && rb1.x - packageSprite.x < rb1.width/2 + packageSprite.width/2) {
      packageSprite.velocityX = packageSprite.velocityX * (-1);
      rb1.velocityX = rb1.velocityX * (-1);
    }
    if (packageIMG.y - rb1.y < rb1.height/2 + packageSprite.height/2
      && rb1.y - rb1.y < rb1.height/2 + packageSprite.height/2) {
        packageSprite.velocityY = packageSprite.velocityY * (-1);
        rb1.velocityY = rb1.velocityY * (-1);
    } 
  }




