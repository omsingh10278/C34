class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5,
            length :10            
        }
      //  this.sling1 = loadImage('sprites/sling1.png');
       
        this.chain = Constraint.create(options);
        World.add(myWorld, this.chain);

    }
   
   display(){
      //  image(this.sling1,200,20);
        
     var pos1=this.chain.bodyA.position
     var pos2=this.chain.bodyA.position
        
           
                strokeWeight(10);
                line(pos1.x , pos1.y, pos2.x , pos2.y);
               
    }
    
}