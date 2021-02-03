class Hero {

    constructor(x,y,r){
     var options={

     
       density : 1,
       frictionAir :1
 }
        this.x=x
        this.y =y
        this.r =r
        this.image= loadImage("images/Superhero-01.png")
        this.body = Bodies.circle(x , y , r)
        World.add(world ,this.body)
 
 
    }
 
 
 display(){
 
   var pos= this.body.position
   var angle = this.body.angle
     push()
     translate(pos.x , pos.y)
     rotate(angle)
     fill("blue")
     imageMode(RADIUS)
    image(0,0,this.r,this.r)
     pop()
 
 }
 
 
}