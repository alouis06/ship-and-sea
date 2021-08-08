var ship
var sea, seaImage
function preload(){
seaImage = loadAnimation("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}
function setup(){
  createCanvas(400,400);
  sea = createSprite(200,180,400,20);
  sea.addImage("sea.png",seaImage);
  sea.x = sea.width /2;
  sea.velocityX = -4;

  ship = createSprite(50,180)
  ship.addAnimation("ship", shipImg)
  ship.scale = 0.5;
}

function draw() {
  background("blue");
 drawSprites()
}