//gobla variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

//creating constant enginge, body, world, bodies,
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload
function preload()
{
	//creaating image for package and helicopter
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

//function set up
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
//creating package sprite
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//creating helicopter sprite
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//creating ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

//creating engine and world
	engine = Engine.create();
	world = engine.world;

	//package body
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //position for package
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  drawSprites();
 
}

function keyPressed() {
	
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic( packageBody , false);
		}
}
 




