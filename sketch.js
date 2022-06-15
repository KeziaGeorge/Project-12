
var runner, runner1;
var path, path1;
var invisiblepath1, invisiblepath2;

function preload(){
  //pre-load images
 path1= loadImage("path.png");
 runner1= loadAnimation ("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
// creating the ground
path = createSprite(200,200);
path.addImage("path", path1);
path.velocityY = 3;
path.scale=1.2;
invisiblepath1 = createSprite(50,200,20,400);
//invisiblepath1. visible = false
invisiblepath2 =  createSprite(350,200,20,400);
//invisiblepath2.visible = false

 // creating the runner
 runner = createSprite(200,370,20,20);
 runner.addAnimation ("running", runner1);
 runner.scale=0.04;

}

function draw() {
  background(0);
  if (path.y>400)
{
  path.y= height/2;
}
runner.x=mouseX;
runner.collide(invisiblepath1);
runner.collide(invisiblepath2);

  drawSprites();
}
