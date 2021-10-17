var bgImg;
var cat,mouse;


function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catimg1 = loadAnimation("cat1.png");
    mouseimg1 = loadAnimation("mouse1.png");
    catimg2 = loadAnimation("cat3.png");
    mouseimg2 = loadAnimation("mouse2.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870,600);
    cat.addAnimation("catSitting",catimg1);
    cat.scale = 0.2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x<(cat.width )/2){
        cat.velocityX = 0;
        cat.addAnimation("catLastImage",catimg3);
        cat.changeAnimation("catLastImage");
        cat.x = 300;
        cat.scale = 0.2;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
mouse.addAnimation("mouseTeasing",mouseimg2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay = 25;

cat.velocityX = -5;
cat.addAnimation("catTeasing",catimg2);
cat.changeAnimation("catTeasing");
cat.frameDelay = 25;
}

}
