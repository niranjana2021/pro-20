var cat,catImg1,mouse,mouseImg1,catImg2,mouseImg2;
var bgImg;

function preload() {
    //load the images here
bgImg.loadImage("garden.png");
catImg1.loadImage("cat1.png");
mouseImg1.loadImage("mouse1.png");
catImg2.loadImage("cat2.png,cat3.png");
mouseImg2.loadImage("mouse2.png,mouse3,png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(200,200);
mouse=createSprite(180,200);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
