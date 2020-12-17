var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1, box2, box3, ground;

function preload(){
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = Engine.create();
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	box1 = new Box(290,610,20,100);
	box2 = new Box(510,610,20,100);
	box3 = new Box(width/2,650,200,20);
	ground = new Ground(width/2, 660, 800, 10);

	Engine.run(engine); 
}

function draw() {
    rectMode(CENTER);
	background(0); 
	Engine.update(engine);
	
    packageSprite.x = packageBody.position.x 
	packageSprite.y = packageBody.position.y

	box1.display();
	box2.display();
	box3.display();
	ground.display();

	drawSprites(); 
	keyPressed();
	
}

function keyPressed() {

    if (keyDown(DOWN_ARROW)){		
		packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
		World.add(world, packageBody);		
  }
}