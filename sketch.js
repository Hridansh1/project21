var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   ground1=createSprite(0,580,360,30)
   ground1.shapeColor="red"
   ground2=createSprite(295,580,200,30)
   ground2.shapeColor="blue"
   ground3=createSprite(515,580,200,30)
   ground3.shapeColor="white"
   ground4=createSprite(740,580,200,30)
   ground4.shapeColor="yellow"
    //create box sprite and give velocity
    ball = createSprite(random(20,750),100, 40,40);
     ball.shapeColor = rgb(255,255,255); ball.velocityX = 4; ball.velocityY = 9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges=createEdgeSprites()
    ball.bounceOff(edges);
    if(ground1.isTouching(ball) && ball.bounceOff(ground1)){ ball.shapeColor = "red"}
    if(ground2.isTouching(ball) && ball.bounceOff(ground2)){ ball.shapeColor = "blue"}
    if(ground3.isTouching(ball) && ball.bounceOff(ground3)){ ball.shapeColor = "white"}
    if(ground4.isTouching(ball) && ball.bounceOff(ground4)){ ball.shapeColor = "yellow"}
    //add condition to check if box touching surface and make it box
    drawSprites();
}
