var score= 0;

var dog,bone,stone;
var dogImg,boneImg,stoneImg;
var ground, invisibleGround;
var bonesGroup,stonesGroup;

function preload(){
  dogImg = loadImage("dog.png");
  boneImg = loadImage("bone.png");
  stoneImg = loadImage("stone.png");
}

function setup() {
  createCanvas(600, 200);
  
  dog = createSprite(550,180,20,50);
  dog.addImage(dogImg);
  dog.scale =0.3;
  
  ground = createSprite(200,200,1000,20);
  ground.shapeColor="brown";
  
  invisibleGround = createSprite(200,200,1000,10);
  invisibleGround.visible = false;
  
  bonesGroup = new Group();
  stonesGroup = new Group();
}

function draw() {
  background(255);
  textSize(23);
  text("Score: " + score,30,40);
  
   if(keyDown("space")) {
      dog.velocityY = -10;
    }
    dog.velocityY = dog.velocityY + 0.8;
  
    ground.velocityX =6;
  
    if (ground.x > 390){
      ground.x = ground.width/2;
    }
    drawSprites();
  
    dog.collide(invisibleGround);
    spawnBones();
    spawnStones();
    if(bonesGroup.isTouching(dog)){
    textSize(25);
    text("Bone eaten :) ", 350,40);
    score = score + Math.round(getFrameRate()/60);
    }
}

function spawnBones() {
  //write code here to spawn the bones
  if (frameCount % 50 === 0) {
    bone = createSprite(30,180,40,10);
    bone.addImage(boneImg);
    bone.scale =0.1 ;
    bone.velocityX = 3;
    
     //assign lifetime to the variable
    bone.lifetime = 170;
    
    bonesGroup.add(bone);
  }
}

function spawnStones(){
  //code to spawn the bones
  if (frameCount % 80=== 0) {
    stone = createSprite(30,180,40,10);
    stone.addImage(stoneImg);
    stone.scale =0.02;
    stone.velocityX = 3;
    
    //assign lifetime to the variable
    stone.lifetime = 180;
    stonesGroup.add(stone);
  }
}
