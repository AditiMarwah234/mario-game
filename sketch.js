var cloud1, cloud2, cloud, cloudsGroup
var ground, groundImg
function preload(){
cloud1 = loadImage("assets/cloud1.png")
cloud2 = loadImage("assets/cloud2.png")
groundImg = loadImage("assets/ground.png")
}

function setup(){
createCanvas(windowWidth, windowHeight)
ground = createSprite(width/2, height-100, width, 60)
ground.addImage(groundImg)
cloudsGroup = new Group()
}

function draw(){
  background("#5a8ff3")
  spawnClouds()
 drawSprites() 
}

function spawnClouds(){
if(frameCount%120===0){
  cloud = createSprite(width, 100)
  cloud.y = Math.round(random(100,400))
  var x = Math.round(random(0,1))
  if(x==0){
    cloud.addImage(cloud1)
  }
  else{
    cloud.addImage(cloud2)
  }
  cloud.scale=0.5
  cloud.velocityX=-3
  cloud.lifetime = 800
  cloudsGroup.add(cloud)
}
}
