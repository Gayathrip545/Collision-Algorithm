function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

}

function draw() {
  background("lightblue");

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  console.log(movingRect.x - fixedRect.x);
  console.log(movingRect.width/2+fixedRect.width/2);
if(movingRect.x - fixedRect.x <= movingRect.width/2+fixedRect.width/2
 &&fixedRect.x - movingRect.x <= movingRect.width/2+fixedRect.width/2 )
{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  
}
else {
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}

  drawSprites();


}