var canvas;

var fixSprite1,fixSprite2,fixSprite3,fixSprite4;
var movingsprite;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);


    movingSprite=createSprite(random(10,750),300,20,20);
    movingSprite.shapeColor="white";
    movingsprite.velocityX=3;
    movingsprite.velocityY=3;


    fixSprite1=createSprite(100,590,180,20);
    fixSprite1.shapeColor="red";

    fixSprite2=createSprite(300,590,180,20);
    fixSprite2.shapeColor="green";

    fixSprite3=createSprite(500,590,180,20);
    fixSprite3.shapeColor="blue";

    fixSprite4=createSprite(700,590,180,20);
    fixSprite4.shapeColor="yellow";



}

function draw() {
    background(rgb(169,169,169));
    
 if(movingsprite.x,0){
     music.stop()
     movingsprite.velocityX=3
 } else if(movingsprite.x>800){
music.stop()
movingsprite.velocityX=-3
 }

if(isTouching(movingsprite,fixSprite4)){
    music.play()
    movingsprite.shapeColor="yellow"; 
    bounceOff(movingsprite,fixSprite4)

}

else if(isTouching(movingsprite,fixSprite3)){
    music.stop()
    movingsprite.shapeColor="blue";
    bounceOff(movingsprite,fixSprite3)
}


elseif(isTouching(movingsprite,fixSprite2));{
    music.stop()
    movingsprite.shapeColor="green";
    bounceOff(movingsprite,fixSprite2)
    movingsprite.velocityX=0;
    movingsprite.velocityY=0;
}

elseif(isTouching(movingsprite,fixSprite1));{
music.stop()
movingsprite.shapeColor="red";
bounceOff(movingsprite,fixSprite1)
}

if (movingsprite.y<0){
 music.stopw()
 movingsprite.velocityY=3   
}



drawsprites()
}