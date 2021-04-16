class IRON {
    constructor(x, y) {
      var options = {
        'restitution':0.8,
		'friction':3,
	    'density':30
        
      };      
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height =50;
     // Matter.Body.setAngle(this.body.angle);
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER)
      strokeWeight(3);
      stroke('green')
      fill('255')
       rect(0, 0, this.width, this.height);
      pop();
    };
  };