class Paper {
    constructor(x, y) {
      var options = {

          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.paper = Bodies.circle(x, y, 25, options);
      
      
      World.add(world, this.paper);
    }
    display(){
      var pos =this.paper.position;
      rectMode(CENTER);
      fill("purple");
      circle(pos.x, pos.y,25);
      
    }
  };
  