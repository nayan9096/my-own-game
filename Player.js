class Player {
    constructor(){

      this.x =200;
      this.y =100;
      this.spt=createSprite(this.x,this.y,35,35);
      this.spt.shapeColor="red";
    }

    
    moveLeft(){
        this.spt.x=this.spt.x-5;
    }
    moveRight(){
        this.spt.x=this.spt.x+5;
    }
    moveUp(){
        this.spt.y=this.spt.y-6;
    }
    moveDown(){
        this.spt.y=this.spt.y+6;
    }

    
}