
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,paperObject,groundObject
var world


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
    dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new groundObject(width/2,670,width,20);
	//Create a ground


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 70,
			wireframe : false
		}
	});
	


	Engine.run(engine);
	//Render .run(render);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbinObj.display();
  paperObject.display();
  groundObject.display();

  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
        
		Matter.Body.applyForce(paperObject.body.paperObject.body.position,{x:85,y:-85});
	}
}



