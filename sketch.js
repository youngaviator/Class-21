var fixedRect, movingRect,object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(800,600,45,45)
  object2 = createSprite(1000,700,50,50)
  object1.shapeColor="green"
  object2.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( isTouching(movingRect,object2)){
  movingRect.shapeColor="red"
 object2.shapeColor="red"

 }
 else{
  movingRect.shapeColor="green"
  object2.shapeColor="green"

 }
  
  drawSprites();
}