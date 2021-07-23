var spacebg,issbg,spacecrft1bg,spacecrft2bg,spacecrft3bg,spacecrft4bg
var iss,spacecrft,box

function preload(){
spacebg=loadImage("Docking-undocking/spacebg.jpg");
issbg=loadImage("Docking-undocking/iss.png")
spacecrft1bg=loadImage("Docking-undocking/spacecraft1.png")
spacecrft2bg=loadImage("Docking-undocking/spacecraft2.png")
spacecrft3bg=loadImage("Docking-undocking/spacecraft3.png")
spacecrft4bg=loadImage("Docking-undocking/spacecraft4.png")

}
function setup() {
  createCanvas(windowWidth,windowHeight);
 
  iss=createSprite(windowWidth/2,windowHeight/2);
  iss.addImage(issbg)

  spacecrft=createSprite(200,100);
  spacecrft.addImage(spacecrft1bg);
  spacecrft.scale=0.2

  box=createSprite(383,325,30,8);
  box.visible=false

}

function draw() {
  background(spacebg);
  
  if(keyDown("right")){
    spacecrft.x=spacecrft.x+5;
    spacecrft.addImage(spacecrft4bg);

  } else{
    spacecrft.addImage(spacecrft1bg);
  }
  if(keyDown("left")){
    spacecrft.x=spacecrft.x-5;
    spacecrft.addImage(spacecrft3bg);

  } else{
    spacecrft.addImage(spacecrft1bg);
  }

  if(keyDown("up")){
    spacecrft.y=spacecrft.y-5;
    spacecrft.addImage(spacecrft2bg);

  } else{
    spacecrft.addImage(spacecrft1bg);
  }

  if(keyDown("down")){
    spacecrft.y=spacecrft.y+5;
    spacecrft.addImage(spacecrft2bg);

  } else{
    spacecrft.addImage(spacecrft1bg);
  }


  if(spacecrft.isTouching(box)){
    textSize(50)
    textFont("ALGERIAN")
    text("DOCKING SUCCESSFUL",200,500)
    

  }
  
//console.log()

  drawSprites();
}