var player
var bot
var botImgidle
var botImg
var playerImg
var botImgesquerda
var playerImgesquerda
var playerImgidle
var ground, bgImg
function preload() {
    playerImg= loadAnimation("estego/player1.png","estego/player2.png","estego/player3.png","estego/player4.png","estego/player5.png","estego/player6.png","estego/player7.png","estego/player8.png")
    playerImgesquerda= loadAnimation("estego/player-esquerda1.png","estego/player-esquerda2.png","estego/player-esquerda3.png","estego/player-esquerda4.png","estego/player-esquerda5.png","estego/player-esquerda6.png","estego/player-esquerda7.png","estego/player-esquerda8.png")
    playerImgidle= loadAnimation("estego/player3.png")
    bgImg = loadImage("plx-5.png")


    botImgesquerda= loadAnimation("dinored/Dino-esquerda1.png","dinored/Dino-esquerda2.png","dinored/Dino-esquerda3.png","dinored/Dino-esquerda4.png","dinored/Dino-esquerda5.png","dinored/Dino-esquerda6.png","dinored/Dino-esquerda7.png")
   botImg= loadAnimation("dinored/Dino-vermelho1.png","dinored/Dino-vermelho2.png","dinored/Dino-vermelho3.png","dinored/Dino-vermelho4.png","dinored/Dino-vermelho5.png","dinored/Dino-vermelho6.png","dinored/Dino-vermelho7.png")
   botImgidle= loadAnimation("dinored/dino-vermelho3.png")
}
function setup(){

    createCanvas(800,600)
     player = createSprite(200,500,30,30)
     player.scale = 1.5;
     player.addAnimation("parado",playerImgidle)
     player.addAnimation("direita",playerImg)
     player.addAnimation("esquerda",playerImgesquerda)




     bot = createSprite(230,500,30,30)
     bot.scale = 3.5;
     bot.addAnimation("parado",botImgidle)
     bot.addAnimation("direita",botImg)
     bot.addAnimation("esquerda",botImgesquerda)
     bot.velocityX = 3
     
     ground = createSprite(0,600,1800)
    bot.setCollider("circle",0,0,7)
    
    
}
function draw(){
    
    background("lightblue");
console.log(bot.x)
    imageMode(CENTER)
    image(bgImg,0,250,displayWidth,displayHeight)

    if(keyDown("space") && player.y > 450 ){
        player.velocityY =-10;
    }

    if(keyDown("d")){
        player.x += 3;
        player.changeAnimation("direita",playerImg);
    }
    
    else if(keyDown("a")){
        player.x -= 3;
        player.changeAnimation("esquerda",playerImgesquerda);
    }
    else{
        player.changeAnimation("parado",playerImgidle);
    }

    player.velocityY +=0.8;

    player.collide(ground);
if(bot.velocityX>0){
    bot.changeAnimation("direita",botImg)
    
}
else if(bot.velocityX<0){
    bot.changeAnimation("esquerda",botImgesquerda)

}
bot.velocityY +=0.8
bot.collide(ground)

if(bot.)

    camera.position.x = player.x
    //camera.position.y = player.y
    drawSprites();
}