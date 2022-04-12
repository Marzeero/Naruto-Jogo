
//GAMESTATES
var start = 0;
var play = 1;
var lose = 2;
var win = 3;

// LOGOS 
var narutologo;
var narutologoo;

//SONS
var startsound;

//BOTÕES
var bstart,bstartimg;
var music;
var musicspriteon;

//SCORE WIN LOSE
var slose, swin, spoint;

//PROTAGONISTA
var narutobrinks;

var narutoan;
var naruto;
var narutoawk;

//PERSONAGEM
var narutoreal;
var narreals;

//ANTAGONISTA
var itachibrinks;

var itachian;

//INIMIGOS

//SPRITES
var spritestart;

var musicsprite;

//GAMESTATE INICIAL
var gamestate = start;

//FUNDOS
var flose, fplay, fstart,fwin;

function preload(){

    narutologo = loadImage("narutologo.png")

    //FUNDO TIPOS

    flose = loadImage("lose.jpg");
    fplay = loadImage("fundo.png");
    fstart = loadImage("play.png");
    fwin = loadImage("win.jpg");

    //BOTAO LOAD
    bstartimg = loadImage("startbutton.png");
    music = loadImage("musicof.png");
    musicon = loadImage("musicon.png");

    //PROTAGONISTA
    narutoawk = loadImage("narutob.png");
    naruto = loadAnimation("naruto_0-1.png");
    narutoan = loadAnimation("naruto_4-1.png","naruto_4-2.png","naruto_4-1.png","naruto_4-2.png");

    narreals = loadAnimation("naruto_20-0.png","naruto_20-1.png","naruto_20-2.png","naruto_20-3.png","naruto_20-4.png","naruto_20-5.png")

    //ANTAGONISTA
    itachian = loadAnimation("itaci_20-0.png","itaci_20-1.png","itaci_20-2.png","itaci_20-3.png","itaci_20-4.png","itaci_20-5.png")


    //INIMIGOS



    //###################
    //   SONS
    //###################

    startsound = loadSound("TRACKNARUTO.mp3");


}

function setup() {
    createCanvas(790, 450);


    spritestart = createSprite(200, 200);
    spritestart.addImage(fstart);
    spritestart.scale = 0.59;
    spritestart.visible = false;

    spriteplay = createSprite(450, 200);
    spriteplay.addImage(fplay);
    spriteplay.visible = false;

    bstart = createSprite(359, 230);
    bstart.addImage(bstartimg);
    bstart.visible = false;
    bstart.scale = 0.05;

    narutobrinks = createSprite(200, 350);
    narutobrinks.visible = false;
    narutobrinks.addAnimation("naruto",narutoan);
    narutobrinks.velocityX = 3;
    narutobrinks.scale = 1.5;

    itachibrinks = createSprite(350, 350);
    itachibrinks.visible = false;
    itachibrinks.addAnimation("itachi",itachian);
    itachibrinks.velocityX = 3;
    itachibrinks.scale = 1.5;


    narutologoo = createSprite(370,120);
    narutologoo.addImage(narutologo);
    narutologoo.scale = 0.2;
    narutologoo.visible = false;


    musicsprite = createSprite(700, 50);
    musicsprite.addImage(music);
    musicsprite.scale = 0.2;

    musicspriteon = createSprite(630,50);
    musicspriteon.addImage(musicon);
    musicspriteon.scale = 0.059;

    narutoreal = createSprite(200, 385)
    narutoreal.addAnimation("narreal",narreals);
    narutoreal.scale = 1.9;
    narutoreal.visible = false;

}

function draw() {
    
    console.log(spriteplay.x); 

    if(gamestate === start){
        spritestart.visible = true;
        narutologoo.visible = true;
        narutobrinks.visible = true;
        itachibrinks.visible = true;
        bstart.visible = true;


        if(narutobrinks.x >= 725){
            narutobrinks.x = -250;
        }

        if(itachibrinks.x >= 723){
            itachibrinks.x = -90;

        }
    

        



        if(mousePressedOver(bstart)){
            gamestate = play;
        }


        


    if(gamestate === play){

        spriteplay.visible = true;
        spriteplay.scale = 1.24;
        bstart.visible = false;
        narutologoo.visible = false;
        narutoreal.visible = true;
        narutobrinks.visible = false;
        itachibrinks.visible = false;
        narutobrinks.setLifetime=0;
        itachibrinks.setLifetime=0;

        narutoreal.velocityX = 2;
        spriteplay.velocityX = -1; 

        if(spriteplay.x < 300){
            spriteplay.velocityX = 1;
        }

    }

    }


    if(mousePressedOver(musicsprite)) {
        startsound.stop();
        }

    if(mousePressedOver(musicspriteon)){
        startsound.play();
        }


    drawSprites();
}
