class Ghost {
    constructor(){
        this.spt=createSprite(50,50,20,20);
        this.spt.shapeColor="black";
        this.spt.velocityX=random([-2,2]);
        this.spt.velocityY=random([-2,2])
        var r=random(1,4);
        //this.spt.addImage(ghostImage);
    
        
    }
}