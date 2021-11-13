
var key1,key2,count=0,state=0;

function preload(){
  keyImage=loadImage("images/key.png");
  ghostImage=loadImage("images/ghost.png")
  bg=loadImage("images/bg.jpg");
  blockImage=loadImage("images/block.PNG")
}
function setup() {
  createCanvas(600,600);
 key1=new Key(30,570);
 key2=new Key(570,300)
 key3=new Key(300,25)

 ghost=new Ghost();

block50=new Block(5,10,10,1200)
block51=new Block(10,5,1200,10)
block52=new Block(600,5,10,1200)
block53=new Block(5,600,1200,10)

player=new Player(200,100,50,50);

block1=new Block(100,40,25,300);
block2=new Block(150,140,90,25);
block3=new Block(400,150,80,25);
block4=new Block(250,40,25,100);
block5=new Block(230,250,25,100);
block6=new Block(150,250,120,25);
block7=new Block(320,100,25,100);
block8=new Block(400,20,130,25);
block9=new Block(480,120,25,100);
block10=new Block(330,290,150,20)
block11=new Block(370,220,40,20)
block12=new Block(450,290,25,120)
block13=new Block(100,400,25,100)
block14=new Block(50,300,25,100)
block15=new Block(300,400,100,25)
block16=new Block(550,200,25,100)
block17=new Block(570,330,50,25)
block18=new Block(450,450,100,25)
block19=new Block(170,360,25,100)
block20=new Block(100,580,100,25)
block21=new Block(160,500,25,100)
block22=new Block(50,520,20,20)
block23=new Block(520,530,100,25)
block24=new Block(300,490,100,25)
block25=new Block(390,550,25,50)
}

function draw() {
  background(bg); 
  text("x:"+mouseX+"y:"+mouseY,20,20)
  
  
  if(player.spt.isTouching(key1.spt)){
  key1.spt.destroy();
  count=count+1;
  }
  if(player.spt.isTouching(key2.spt)){
  key2.spt.destroy()
  count=count+1;
  }
  if(player.spt.isTouching(key3.spt)){ 
 key3.spt.destroy()
 count=count+1;
  }
if(count==3){
  textSize(20);
    fill("black")
  text("YOU GOT ALL 3 KEYS",255,270)
}
  
  if(keyDown("left")){
    player.moveLeft();
  }
  if(keyDown("right")){
    player.moveRight();
  }
  if(keyDown("up")){
    player.moveUp();
  }
  if(keyDown("down")){
    player.moveDown();
  }
  player.spt.bounceOff(block1.spt);
  player.spt.bounceOff(block2.spt);
  player.spt.bounceOff(block3.spt);
  player.spt.bounceOff(block4.spt);
  player.spt.bounceOff(block5.spt);
  player.spt.bounceOff(block6.spt);
  player.spt.bounceOff(block7.spt);
  player.spt.bounceOff(block8.spt);
  player.spt.bounceOff(block9.spt);
  player.spt.bounceOff(block10.spt);
  player.spt.bounceOff(block11.spt);
  player.spt.bounceOff(block12.spt);
  player.spt.bounceOff(block13.spt);
  player.spt.bounceOff(block14.spt);
  player.spt.bounceOff(block15.spt);
  player.spt.bounceOff(block16.spt);
  player.spt.bounceOff(block17.spt);
  player.spt.bounceOff(block18.spt);
  player.spt.bounceOff(block19.spt);
  player.spt.bounceOff(block20.spt);
  player.spt.bounceOff(block21.spt);
  player.spt.bounceOff(block22.spt);
  player.spt.bounceOff(block23.spt);
  player.spt.bounceOff(block24.spt);
  player.spt.bounceOff(block25.spt);

  ghost.spt.bounceOff(block1.spt);
  ghost.spt.bounceOff(block2.spt);
  ghost.spt.bounceOff(block3.spt);
  ghost.spt.bounceOff(block4.spt);
  ghost.spt.bounceOff(block5.spt);
  ghost.spt.bounceOff(block6.spt);
  ghost.spt.bounceOff(block7.spt);
  ghost.spt.bounceOff(block8.spt);
  ghost.spt.bounceOff(block9.spt);
  ghost.spt.bounceOff(block10.spt);
  ghost.spt.bounceOff(block11.spt);
  ghost.spt.bounceOff(block12.spt);
  ghost.spt.bounceOff(block13.spt);
  ghost.spt.bounceOff(block14.spt);
  ghost.spt.bounceOff(block15.spt);
  ghost.spt.bounceOff(block16.spt);
  ghost.spt.bounceOff(block17.spt);
  ghost.spt.bounceOff(block18.spt);
  ghost.spt.bounceOff(block19.spt);
  ghost.spt.bounceOff(block20.spt);
  ghost.spt.bounceOff(block21.spt);
  ghost.spt.bounceOff(block22.spt);
  ghost.spt.bounceOff(block23.spt);
  ghost.spt.bounceOff(block24.spt);
  ghost.spt.bounceOff(block25.spt);

ghost.spt.bounceOff(block50.spt);
ghost.spt.bounceOff(block51.spt);
ghost.spt.bounceOff(block52.spt);
ghost.spt.bounceOff(block53.spt);

if(player.spt.isTouching(ghost.spt)){
  player.spt.destroy();
  ghost.spt.destroy();
  state=1;
  
}
if(state==1){
  textSize(25);
  fill("red")
  text("player die!",265,270);
  
}

  drawSprites();
}