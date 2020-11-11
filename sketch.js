var cm1img,cm1
function preload(){
 cm1img = loadAnimation("ams2.jpg","amw2.jpg");

}
function setup() {
  createCanvas(800,800);
  cm1=createSprite(120,230,50,50);
cm1.addAnimation("cm1",cm1img)
cm1.scale=0.5;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}