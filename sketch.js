
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  bg = loadImage("./Assets/bg.png");
  boyImg = loadAnimation("./Assets/boy1.png", "./Assets/boy2.png", "./Assets/boy3.png", "./Assets/boy4.png")
  boyStd = loadAnimation("./Assets/boy4.png")
  startingPoint = loadImage("./Assets/startingPoint.png");
  floatingIsland1 = loadImage("./Assets/floatingIsland1.png");
  floatingIsland2 = loadImage("./Assets/floatingIsland2.png");

}

function setup() {
  engine = Engine.create()
  world = engine.world
  canvas = createCanvas(windowWidth, windowHeight);
  //boy = new Boy(100, height - 200)
  boy = createSprite(100, height - 300)
  boy.scale = 0.6
  imageMode (CENTER)
  boy.addAnimation("standiing", boyStd)
  boy.addAnimation("walking", boyImg)
  startingPoint = new Ground(100, height - 250, 150, 250, startingPoint)
  float1 = new Ground(350, height - 300, 150, 250, floatingIsland1)
  float2 = new Ground(550, height - 350, 150, 250, floatingIsland2)
  float3 = new Ground(800, height - 450, 150, 250, floatingIsland1)
  float4 = new Ground(1050, height - 250, 150, 250, floatingIsland2)
  endingPoint = new Ground(1200, height - 300, 150, 250, startingPoint)
  startingPointsprite = createSprite(100, height - 230, 100, 30)
  float1sprite = createSprite(350, height - 300, 150, 250, floatingIsland1)
  float2sprite = createSprite(550, height - 350, 150, 250, floatingIsland2)
  float3sprite = createSprite(800, height - 450, 150, 250, floatingIsland1)
  float4sprite = createSprite(1050, height - 250, 150, 250, floatingIsland2)
  endingPointsprite = createSprite(1200, height - 300, 150, 250, startingPoint)
  startingPointsprite.visible = false
  float1sprite.visible = false
  float2sprite.visible = false
  float3sprite.visible = false
  float4sprite.visible = false
  endingPointsprite.visible = false
}

function draw() {
  background(255);
  image(bg,width/2,height/2,width,height)
  textSize(30)
  fill ("white")
  text ("Press Space To Start",width/2-100,50)
  
  if (keyIsDown(RIGHT_ARROW)) {
    boy.changeAnimation("walking")
    boy.position.x+=3
  }
  if (keyIsDown(LEFT_ARROW)) {
    boy.changeAnimation("walking")
    boy.position.x-=3
  }
  //console.log(boy.y)
  
  if (keyDown("space")&&boy.y>startingPointsprite.y-200) {
    boy.velocityY =-10
    console.log("spaceWorking")
    boy.changeAnimation("walking")
  }
  
  boy.velocityY = boy.velocityY+1
  boy.collide(startingPointsprite)
  boy.collide(float1sprite)
  boy.collide(float2sprite)
  boy.collide(float3sprite)
  boy.collide(float4sprite)
  boy.collide(endingPointsprite)
 // boy.position.y+=1
  //boy.show()
  
  startingPoint.show()
  float1.show()
  float2.show()
  float3.show()
  float4.show()
 // endingPoint.show()
  drawSprites()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
