class paper {
 constructor(x,y,r){
     var opitions = {
         isStatic: false,
         'restetution' : 0.3,
         'friction' : 0,
         'density' : 1.2
     }
   
     this.body = Bodies.circle(x,y,r,options);
     this.image = loadImage('paper.png')
     World.add(world,ball);
   }
  
 display(){
     var paperpos = this.body.position
     
     push()
     translate(paperpos.x , paperpos.y)
     rectMode(CENTER)
     //rotate(angle)
     imageMode(CENTER)
     image(this.image,0,0,2*this.r,2*this.r)
    //ellipseMode(RADIUS);
    //ellipse(ball.position.x, ball.position.y, 20, 20);
    pop();
 }

}