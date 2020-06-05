var fr,mr;
var g1,g2,g3;

function setup() {
  createCanvas(800,400);
 fr = createSprite(400, 200, 50, 50);
 mr = createSprite (700,200,30,30);
 g1 = createSprite(250,300,50,50);
 g2 = createSprite(300,200,50,50);
 g3 = createSprite(100,150,50,50);
}

function draw() {
  background(0);
  mr.x=mouseX;
  mr.y=mouseY;
  
 
if (isTouching (mr,g2)){
 mr.shapeColor="red"; 
g2.shapeColor="red";
}
  else {
mr.shapeColor="white";
g2.shapeColor="white";
  }
  
  

  drawSprites();
}

