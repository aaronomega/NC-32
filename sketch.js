const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var bg = "sprites/bg1.png";
var gameState = "onSling";
var score = 0;
function preload() {
  //  change_bg_img();
  getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(200,400,12000,40);
   

    box1 = new Box(700,280,20,40);
    box3 = new Box(700,220,20,40);

    box2 = new Box(920,280,20,40);
    box4 = new Box(920,220,20,40);
    
    

    box7 = new Box(730,220,20,40);
    box8 = new Box(730,280,20,40);

    box9 = new Box(760,280,20,40);
    box10 = new Box(760,220,20,40);
    
    box11 = new Box(790,280,20,40);
    box12= new Box(790,220,20,40);
    
    box5 = new Box(810,220,20,40);
    box6 = new Box(810,280,20,40);
    

    

    box13 = new Box(670,220,20,40);
box15 = new Box(670,280,20,40);

    box14 = new Box(940,220,20,40);
box16 = new Box(940,280,20,40);
    

    

    box17 = new Box(840,280,20,40);
    box18 = new Box(840,220,20,40);

    box19 = new Box(870,280,20,40);
    box20 = new Box(870,220,20,40);

    box21 = new Box(900,280,20,40);
    box22 = new Box(900,220,20,40);

    box23 = new Box(930,280,20,40);
    box24= new Box(930,220,20,40);
    

    stone = new Stone(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(stone.body,{x:200, y:300});
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    text("Score " + score,750,40);
   
        
    Engine.update(engine);
    //strokeWeight(4);
    
    ground.display();
   
    box1.display();
    box2.display()

    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    stone.display();
    
    box1.Score();
    box2.Score();

    box3.Score();
    box4.Score();
    box5.Score();
    box6.Score();
    box7.Score();
    box8.Score();
    box9.Score();
    box10.Score();
    box11.Score();
    box12.Score();

    box13.Score();
    box14.Score();
    box15.Score();
    box16.Score();
    box17.Score();
    box18.Score();
    box19.Score();
    box20.Score();
    box21.Score();
    box22.Score();
    box23.Score();
    box24.Score();
    //log6.Score();
    slingshot.display();  
    }
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(stone.body);
        gameState = "onSling";
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
