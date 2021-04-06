var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box,box1
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


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box = Bodies.rectangle(width/2,200,width,5,{restitution:0.5,isStatic:true} );
	 World.add(world,box);
    
    boxPosition = width/2;
	boxy=600;

	 containerDown = Bodies.rectangle(boxPosition,boxy+30,200,20,{isStatic:true});
     World.add(world,containerDown);
    
	 boxBase=createSprite(boxPosition,boxy+30,200,20)
	 boxBase.shapeColor="red";

	 containerleft = Bodies.rectangle(boxPosition-100,boxy-10,20,100,{isStatic:true})
     World.add(world,containerleft);
     
	 boxleft = createSprite(boxPosition-100,boxy-10,20,100);
	 boxleft.shapeColor= "red";

	 boxright =Bodies.rectangle(boxPosition+100,boxy-10,20,100,{isStatic:true})
	 World.add(world,boxright);

	 containerright= createSprite(boxPosition+100,boxy-10,20,100);
	 containerright.shapeColor="red";

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  box.x= packageBody.position.x;
  box.y= packageBody.position.y;
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode=== DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
	Matter.Body.setStatic(box,false);
  }
}
