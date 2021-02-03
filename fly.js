class Chain {

    constructor(bodyA, pointB){
     
      var options={
      bodyA: bodyA,
      pointB:pointB,
      length:350,
      stifness:0.04
 }
        this.pointB = pointB
 
        this.rope = Constraint.create(options)
        World.add(world ,this.rope)
 
 
    }
 
 
 display(){
 
 var pointA = this.rope.bodyA.position
 var pointB = this.pointB

     push()
     fill("green")
     strokeWeight(0)
     line(pointA.x , pointA.y , pointB.x,pointB.y)
     pop()
 
 }
 
 
 
 
 
 
 
 
     
  }