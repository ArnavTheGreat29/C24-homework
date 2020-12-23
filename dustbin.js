class Dustbin{

    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.width = width;
        this.height = height;
        this.dustbin = Bodies.rectangle(x,y,this.width,this.height,options)
       
       
        World.add(world, this.dustbin)
    }

    display(){
       
        var pos =this.dustbin.position;
        rectMode(CENTER);
        fill("white")
        rect(pos.x, pos.y, this.width, this.height)

    }


}