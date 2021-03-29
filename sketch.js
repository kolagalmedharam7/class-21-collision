var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(200, 200, 50, 80);
 fixedRect.shapeColor="green";
 fixedRect.debug=true;
 movingRect=createSprite(400,200,80,50);
 movingRect.shapeColor="green";
 movingRect.debug=true;

}

function draw() {
  background(255,255,255); 
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)

{
  movingRect.shapeColor="red";
  fixedRect.shapeCOlor="red";
}
else{
  movingRect.shapeColor="green";
  fixedRect.shapeCOlor="green";
}
  drawSprites();
}